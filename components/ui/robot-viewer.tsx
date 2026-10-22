"use client"

import { useEffect, useRef, useState } from "react"
import * as THREE from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
import { Loader2 } from "lucide-react"

interface RobotViewerProps {
  className?: string
  modelUrl?: string
}

export function RobotViewer({
  className = "",
  modelUrl = "/images/robot_playground.glb",
}: RobotViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [loadError, setLoadError] = useState<string | null>(null)

  useEffect(() => {
    const container = containerRef.current
    const canvas = canvasRef.current
    if (!container || !canvas) return

    let isAlive = true
    let animationFrameId = 0
    let mixer: THREE.AnimationMixer | null = null
    const clock = new THREE.Clock()

    // Scene
    const scene = new THREE.Scene()

    // Camera
    const width = container.clientWidth || 320
    const height = container.clientHeight || 320
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000)
    camera.position.set(0, 0, 5)

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
    renderer.setSize(width, height)
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.2
    renderer.outputColorSpace = THREE.SRGBColorSpace

    // Orbit Controls
    const controls = new OrbitControls(camera, canvas)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.enableZoom = false // prevent hijacking page scroll
    controls.autoRotate = true
    controls.autoRotateSpeed = 1.2
    controls.maxPolarAngle = Math.PI / 1.7
    controls.minPolarAngle = Math.PI / 3.8

    // Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 2.2)
    scene.add(ambientLight)

    const mainLight = new THREE.DirectionalLight(0xffffff, 2.8)
    mainLight.position.set(5, 10, 8)
    scene.add(mainLight)

    const rimLight = new THREE.DirectionalLight(0xd9d0f7, 2.2) // Subtle lilac accent
    rimLight.position.set(-6, 6, -6)
    scene.add(rimLight)

    const fillLight = new THREE.DirectionalLight(0xd7f0f4, 1.4) // Soft cyan/blue fill
    fillLight.position.set(0, -6, 5)
    scene.add(fillLight)

    // Pivot group to hold and center the model
    const pivot = new THREE.Group()
    scene.add(pivot)

    // GLTFLoader
    const loader = new GLTFLoader()
    loader.load(
      modelUrl,
      (gltf) => {
        if (!isAlive) return
        const model = gltf.scene

        // Compute Bounding Box & Center Model
        const box = new THREE.Box3().setFromObject(model)
        const size = box.getSize(new THREE.Vector3())
        const center = box.getCenter(new THREE.Vector3())

        model.position.x = -center.x
        model.position.y = -center.y
        model.position.z = -center.z

        pivot.add(model)

        // Adjust camera distance to fit perfectly
        const maxDim = Math.max(size.x, size.y, size.z)
        const fov = camera.fov * (Math.PI / 180)
        let cameraDistance = Math.abs(maxDim / (2 * Math.tan(fov / 2)))
        cameraDistance *= 1.25 // slight margin

        camera.position.set(0, maxDim * 0.1, cameraDistance)
        camera.lookAt(0, 0, 0)
        camera.updateProjectionMatrix()
        controls.target.set(0, 0, 0)

        // Setup Animation Mixer
        if (gltf.animations && gltf.animations.length > 0) {
          mixer = new THREE.AnimationMixer(model)
          const action = mixer.clipAction(gltf.animations[0])
          action.play()
        }

        setLoading(false)
      },
      (xhr) => {
        if (!isAlive) return
        if (xhr.total > 0) {
          const percent = Math.min(100, Math.round((xhr.loaded / xhr.total) * 100))
          setProgress(percent)
        }
      },
      (error) => {
        console.error("Error loading 3D model:", error)
        if (isAlive) {
          setLoadError("Failed to load 3D model")
          setLoading(false)
        }
      }
    )

    // Animation Loop
    let isVisible = true
    const animate = () => {
      if (!isAlive) return
      animationFrameId = requestAnimationFrame(animate)

      if (isVisible) {
        const delta = clock.getDelta()
        if (mixer) mixer.update(delta)
        controls.update()
        renderer.render(scene, camera)
      }
    }
    animate()

    // Handle Resize
    const handleResize = () => {
      if (!container || !renderer || !camera) return
      const newWidth = container.clientWidth || 320
      const newHeight = container.clientHeight || 320
      camera.aspect = newWidth / newHeight
      camera.updateProjectionMatrix()
      renderer.setSize(newWidth, newHeight)
    }

    const resizeObserver = new ResizeObserver(handleResize)
    resizeObserver.observe(container)

    // Visibility Observer to pause rendering when scrolled out of view
    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting
      },
      { threshold: 0.05 }
    )
    intersectionObserver.observe(container)

    return () => {
      isAlive = false
      cancelAnimationFrame(animationFrameId)
      resizeObserver.disconnect()
      intersectionObserver.disconnect()

      // Dispose three.js resources
      controls.dispose()
      renderer.dispose()

      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          obj.geometry?.dispose()
          if (Array.isArray(obj.material)) {
            obj.material.forEach((mat) => mat.dispose())
          } else if (obj.material) {
            obj.material.dispose()
          }
        }
      })
    }
  }, [modelUrl])

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full flex items-center justify-center select-none ${className}`}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block cursor-grab active:cursor-grabbing touch-none"
        style={{ pointerEvents: "auto" }}
      />

      {/* Loading overlay with subtle progress */}
      {loading && !loadError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[#F5F4F0]/60 backdrop-blur-xs transition-opacity duration-300 pointer-events-none rounded-full">
          <Loader2 className="w-6 h-6 text-[#A99BEA] animate-spin" />
          <span className="text-[11px] font-mono text-[#707782] tracking-wider uppercase">
            {progress > 0 ? `Loading 3D Model ${progress}%` : "Memuat Objek 3D..."}
          </span>
        </div>
      )}

      {/* Error fallback */}
      {loadError && (
        <div className="absolute inset-0 flex items-center justify-center text-xs text-[#707782] font-mono">
          {loadError}
        </div>
      )}
    </div>
  )
}

export default RobotViewer
