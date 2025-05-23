const { join } = require('path');

module.exports = {
	blockTemplatesPath: join(__dirname, 'block-templates'),
	defaultValues: {
		author: 'eighteen73',
		namespace: 'nebula-blocks',
		textdomain: 'nebula-blocks',
		category: 'text',
		slug: 'example',
		title: 'Example',
		description: 'Example block',
		attributes: {},
		supports: {
			html: false,
		},
		wpScripts: false,
		wpEnv: false,
		version: false,
		editorStyle: false,
		style: 'file:./style-index.css',
		render: 'file:./render.php',
	},
	variants: {
		default: {},
		innerBlocks: {},
		interactive: {
			supports: {
				html: false,
				interactivity: true,
			},
			viewScriptModule: 'file:./view.js',
		},
	},
};
