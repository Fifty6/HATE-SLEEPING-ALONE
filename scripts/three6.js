var scene = new THREE.Scene();
		var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 1, 10000);
		var renderer = new THREE.WebGLRenderer({alpha:true});
		document.getElementById('featured').appendChild(renderer.domElement);
		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.setClearColor( 0x000000, 0 );

		var geometry1 = new THREE.BoxGeometry(16, 9, 0.05, 10, 10, 10);
		var feature1 = THREE.ImageUtils.loadTexture('three-assets/kid.png', {}, function(){},function(){});
		var material1 = new THREE.MeshBasicMaterial({map: feature1});
		var cube1 = new THREE.Mesh(geometry1, material1);

		var geometry2 = new THREE.BoxGeometry(16, 9, 0.05, 10, 10, 10);
		var feature2 = THREE.ImageUtils.loadTexture('three-assets/88.png', {}, function(){},function(){});
		var material2 = new THREE.MeshBasicMaterial({map: feature2});
		var cube2 = new THREE.Mesh(geometry2, material2);

		var geometry3 = new THREE.BoxGeometry(16, 9, 0.05, 10, 10, 10);
		var feature3 = THREE.ImageUtils.loadTexture('three-assets/aa.png', {}, function(){},function(){});
		var material3 = new THREE.MeshBasicMaterial({map: feature3});
		var cube3 = new THREE.Mesh(geometry3, material3);

		var geometry4 = new THREE.BoxGeometry(16, 9, 0.05, 10, 10, 10);
		var feature4 = THREE.ImageUtils.loadTexture('three-assets/willis.png', {}, function(){},function(){});
		var material4 = new THREE.MeshBasicMaterial({map: feature4});
		var cube4 = new THREE.Mesh(geometry3, material3);

		scene.add(cube1);
		scene.add(cube2);
		scene.add(cube3);
		scene.add(cube4);

		camera.position.z = 10;
		camera.position.x = -4;

		cube2.position.x = -5;
		cube3.position.x = -10;
		cube4.position.x = -15;

		cube2.position.y = -1;
		cube3.position.y = -2;
		cube4.position.y = -3;

		cube2.position.z = -3;
		cube3.position.z = -6;
		cube4.position.z = -9;

		cube1.rotation.y = 0.25;
		cube2.rotation.y = 0.25;
		cube3.rotation.y = 0.25;
		cube4.rotation.y = 0.25;

		// cube2.rotation.x = 0.25;
		// cube3.rotation.x = 0.5;
		// cube4.rotation.x = 0.75;
		function render() {
			requestAnimationFrame(render);
			if (cube1.position.z > 3){
				cube1.position.z = -9;
				cube1.position.x = -15;
				cube1.position.y = -3;
			}
			if (cube2.position.z > 3){
				cube2.position.z = -9;
				cube2.position.x = -15;
				cube2.position.y = -3;
			}
			if (cube3.position.z > 3){
				cube3.position.z = -9;
				cube3.position.x = -15;
				cube3.position.y = -3;
			}
			if (cube4.position.z > 3){
				cube4.position.z = -9;
				cube4.position.x = -15;
				cube4.position.y = -3;
			}
			cube1.position.z += 0.03;
			cube2.position.z += 0.03;
			cube3.position.z += 0.03;
			cube4.position.z += 0.03;

			cube1.position.x += 0.04;
			cube2.position.x += 0.04;
			cube3.position.x += 0.04;
			cube4.position.x += 0.04;

			cube1.position.y += 0.01;
			cube2.position.y += 0.01;
			cube3.position.y += 0.01;
			cube4.position.y += 0.01;
			renderer.render(scene, camera);
		};
		render();