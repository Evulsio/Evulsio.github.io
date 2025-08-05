// Hero 섹션을 위한 Three.js 장면 설정 (예: 배경 애니메이션 등)
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 60, window.innerWidth/window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('heroCanvas'), antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 5;

// 예시 애니메이션: 회전하는 구체
const geometry = new THREE.SphereGeometry(1, 32, 32);
const material = new THREE.MeshStandardMaterial({ color: 0x8888ff });
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 5, 5);
scene.add(light);

function animate() {
  requestAnimationFrame(animate);
  sphere.rotation.y += 0.005;
  renderer.render(scene, camera);
}
animate();

// 스크롤 연동 효과 (GSAP + ScrollTrigger 사용)
gsap.registerPlugin(ScrollTrigger);
gsap.to(sphere.rotation, {
  y: Math.PI * 2,
  scrollTrigger: {
    trigger: '#hero',
    start: 'top top',
    end: 'bottom top',
    scrub: true
  }
});
