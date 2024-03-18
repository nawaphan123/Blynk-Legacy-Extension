({
    name: "Blynk-Legacy", // Name
    description: "Use For Old Blynk",
    author: "Nawa Phansaen",
    category: "Communication",
    version: "1.0.0",
    icon: "/static/icon.png", // Category icon
    color: "#bc991a", // Category color (recommend some blocks color)
    blocks: [ // Blocks in Category
        {
            xml: `
                <block type="blynk_setup">
                    <value name="ssid">
                        <shadow type="text">
                            <field name="TEXT">-wifi name-</field>
                        </shadow>
                    </value>
                    <value name="server">
                        <shadow type="text">
                            <field name="TEXT">-server address-</field>
                        </shadow>
                    </value>
                    <value name="auth">
                        <shadow type="text">
                            <field name="TEXT">-Auth Token-</field>
                        </shadow>
                    </value>
                    <value name="pass">
                        <shadow type="text">
                            <field name="TEXT">-wifi pass-</field>
                        </shadow>
                    </value>
                    <value name="template_id">
                        <shadow type="text">
                            <field name="TEXT">--template-id--</field>
                        </shadow>
                    </value>
                    <value name="template_name">
                        <shadow type="text">
                            <field name="TEXT">--template-name--</field>
                        </shadow>
                    </value>
                    <value name="port">
                        <shadow type="math_number">
                            <field name="NUM">2</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        {
            xml: `
                <block type="math_number">
                    <field name="NUM">8080</field>
                </block>
            `
        },
        "blynk_on_vw",
        "blynk_get_value_number",
        "blynk_get_value_string",
        "blynk_on_vr",
        {
            xml: `
                <block type="blynk_write">
                    <value name="value">
                        <shadow type="math_number">
                            <field name="NUM">5</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        "blynk_loop",
        "blynk_run",
        {
            xml: `
                <block type="text">
                    <field name="TEXT">123456785</field>
                </block>
            `
        }

    ],
    chip: [
        "ESP32", // Chip support
        "RP2-WiFi",
        "Uno-R4-WiFi"
    ], 
    supportArduinoPlatform: true,
    depends: [ // Arduino library
        "Blynk@1.3.2",
        "BlynkNcpDriver@0.6.3"
    ]
});
