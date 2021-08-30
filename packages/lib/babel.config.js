{
    "presets": [
        ["@babel/preset-env", {
            "targets": {
                "node": "current",
                "browsers": "last 2 versions, > 5%, not ie < 11"
            },
            "useBuiltIns": "usage",
            "modules": "auto",
            "corejs": { "version": "3", "proposals": true }
        }],
        "@babel/preset-react", "@babel/preset-typescript"
    ],
    "plugins": ["@babel/plugin-proposal-class-properties"]
}
