UI_Install:
	npm ci

UI_Up:
	npm run dev

UI_Build:
	npm run build

UI_Lint:
	sudo npm run lint

UI_Start:
	make UI_Lint && make UI_Build && npm run start