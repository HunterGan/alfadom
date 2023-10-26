UI_Install:
	npm ci

UI_Up_Dev:
	npm run dev

UI_Build_Dev:
	npm run build

UI_Lint:
	sudo npm run lint

UI_Start_Dev:
	make UI_Lint && make UI_Build && npm run start

UI_Build:
	docker build -t nextjs-docker .

UI_Run:
	docker run -p 3000:3000 nextjs-docker

UI_Start:
	make UI_Build && make UI_Run