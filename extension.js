({
    name: "Blynk-Legacy", // Name
    description: "Use For Old Blynk",
    author: "Nawa Phansaen",
    category: "Communication",
    version: "2.0.1",
    icon: "/static/icon.png", // Category icon
    color: "#bc991a", // Category color (recommend some blocks color)
    blocks: [ // Blocks in Category
        {
            xml: `
                <block type="blynk_setup1">
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
 
        "blynk_on_vw1",
        "blynk_get_value_number1",
        "blynk_get_value_string1",
        "blynk_on_vr1",
        {
            xml: `
                <block type="blynk_write1">
                    <value name="value">
                        <shadow type="math_number">
                            <field name="NUM">5</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        "blynk_loop1",
        "blynk_run1",
        {
            xml: `
                <block type="text">
                    <field name="TEXT">123456785</field>
                </block>
            `
        }  ,{
            xml: `
                <block type="math_number">
                    <field name="NUM">8080</field>
                </block>
            `
        },

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
