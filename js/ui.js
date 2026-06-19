const panel =
document.createElement("div");

panel.id = "infoPanel";

panel.innerHTML = `

<div class="hudCard">
🌡 Temperatura:
<span id="weatherValue">
--
</span>
</div>

`;

document.body.appendChild(panel);
