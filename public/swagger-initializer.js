window.onload = function() {
    const ui = SwaggerUIBundle({
      url: "/swagger.yaml", // Caminho correto do YAML
      dom_id: "#swagger-ui",
      deepLinking: true,
      presets: [SwaggerUIBundle.presets.apis, SwaggerUIStandalonePreset],
      plugins: [SwaggerUIBundle.plugins.DownloadUrl],
      layout: "StandaloneLayout"
    });
    window.ui = ui;
  };
  