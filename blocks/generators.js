Blockly.Python['blynk_setup1'] = function(block) {
  var value_ssid = Blockly.Python.valueToCode(block, 'ssid', Blockly.Python.ORDER_ATOMIC) || '""';
  var value_pass = Blockly.Python.valueToCode(block, 'pass', Blockly.Python.ORDER_ATOMIC) || 'None';
  var value_server = Blockly.Python.valueToCode(block, 'server', Blockly.Python.ORDER_ATOMIC) || '""';
  var value_auth = Blockly.Python.valueToCode(block, 'auth', Blockly.Python.ORDER_ATOMIC) || '""';
  var value_port = Blockly.Python.valueToCode(block, 'port', Blockly.Python.ORDER_ATOMIC) || '""';
  var dropdown_debug = block.getFieldValue('debug');

  Blockly.Python.definitions_['import_machine'] = 'import machine';
  Blockly.Python.definitions_['import_blynklib'] = 'import BlynkLib';
  Blockly.Python.definitions_['import_network'] = 'import network';

  var functionName = Blockly.Python.provideFunction_(
    'blynkSetup1',
    ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(wifi_ssid, wifi_pass, server, auth, debug, port):',
    '  global blynk',
    '  print("Connecting to WiFi...")',
    '  wifi = network.WLAN(network.STA_IF)',
    '  wifi.active(True)',
    '  wifi.connect(wifi_ssid, wifi_pass)',
    '  while not wifi.isconnected():',
    '    pass',
    '  print("IP:", wifi.ifconfig()[0])',
    '  print("Connecting to Blynk...")',
    '  blynk = BlynkLib.Blynk(auth, server=server, log=debug,port=port)']);

  var code = `${functionName}(${value_ssid}, ${value_pass}, ${value_server}, ${value_auth}, ${dropdown_debug}, ${value_port})\n`;
  return code;
};

Blockly.Python['blynk_on_vw1'] = function(block) {
  var dropdown_pin = block.getFieldValue('pin');
  var statements_callback = Blockly.Python.statementToCode(block, 'callback');
  if (typeof Blockly.Python.variableDB_ === "undefined") {
    Blockly.Python.variableDB_ = Blockly.Python.nameDB_;
  }

  var globals = [];
  var varName;
  var workspace = block.workspace;
  var variables = Blockly.Variables.allUsedVarModels(workspace) || [];
  for (var i = 0, variable; variable = variables[i]; i++) {
    varName = variable.name;
    if (block.getVars().indexOf(varName) == -1) {
      globals.push(Blockly.Python.variableDB_.getName(varName,
          Blockly.VARIABLE_CATEGORY_NAME));
    }
  }
  // Add developer variables.
  var devVarList = Blockly.Variables.allDeveloperVariables(workspace);
  for (var i = 0; i < devVarList.length; i++) {
    globals.push(Blockly.Python.variableDB_.getName(devVarList[i],
        Blockly.Names.DEVELOPER_VARIABLE_TYPE));
  }

  globals = globals.length ?
      Blockly.Python.INDENT + 'global ' + globals.join(', ') + '\n' : '';
  
  var functionName = Blockly.Python.provideFunction_(
    dropdown_pin + '_write_handler',
    ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(value):',
    globals,
    statements_callback]);

  var code = `blynk.callbacks["${dropdown_pin}"] = ${functionName}\n`;
  return code;
};

Blockly.Python['blynk_on_vr1'] = function(block) {
  var dropdown_pin = block.getFieldValue('pin');
  var statements_callback = Blockly.Python.statementToCode(block, 'callback');
  if (typeof Blockly.Python.variableDB_ === "undefined") {
    Blockly.Python.variableDB_ = Blockly.Python.nameDB_;
  }

  var globals = [];
  var varName;
  var workspace = block.workspace;
  var variables = Blockly.Variables.allUsedVarModels(workspace) || [];
  for (var i = 0, variable; variable = variables[i]; i++) {
    varName = variable.name;
    if (block.getVars().indexOf(varName) == -1) {
      globals.push(Blockly.Python.variableDB_.getName(varName,
          Blockly.VARIABLE_CATEGORY_NAME));
    }
  }
  // Add developer variables.
  var devVarList = Blockly.Variables.allDeveloperVariables(workspace);
  for (var i = 0; i < devVarList.length; i++) {
    globals.push(Blockly.Python.variableDB_.getName(devVarList[i],
        Blockly.Names.DEVELOPER_VARIABLE_TYPE));
  }

  globals = globals.length ?
        Blockly.Python.INDENT + 'global ' + globals.join(', ') + '\n' : '';
  
  var functionName = Blockly.Python.provideFunction_(
    dropdown_pin + '_read_handler',
    ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '():',
    globals,
    statements_callback]);

  var code = `blynk.callbacks["read${dropdown_pin}"] = ${functionName}\n`;
  return code;
};

Blockly.Python['blynk_write1'] = function(block) {
  var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC) || "";
  var dropdown_pin = block.getFieldValue('pin');
  var code = `blynk.virtual_write(${+dropdown_pin.replace("V", "")}, ${value_value})\n`;
  return code;
};

Blockly.Python['blynk_get_value_number1'] = function(block) {
  var code = 'int(value[0])';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['blynk_get_value_string1'] = function(block) {
  var code = 'value[0]';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['blynk_loop1'] = function(block) {
  var functionName = Blockly.Python.provideFunction_(
    'blynkLoop',
    ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '():',
    '  while True:',
    '    blynk.run()',
    '    machine.idle()']);

  var code = `${functionName}()\n`;
  return code;
};

Blockly.Python['blynk_run1'] = function(block) {
  var functionName = Blockly.Python.provideFunction_(
    'blynkRun',
    ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '():',
    '  blynk.run()',
    '  machine.idle()']);

  var code = `${functionName}()\n`;
  return code;
};


Blockly.JavaScript['blynk_setup1'] = function(block) {
  var value_ssid = Blockly.JavaScript.valueToCode(block, 'ssid', Blockly.JavaScript.ORDER_ATOMIC) || 'String("")';
  var value_pass = Blockly.JavaScript.valueToCode(block, 'pass', Blockly.JavaScript.ORDER_ATOMIC) || '';
  var value_server = Blockly.JavaScript.valueToCode(block, 'server', Blockly.JavaScript.ORDER_ATOMIC) || 'String("")';
  var value_template_id = Blockly.JavaScript.valueToCode(block, 'template_id', Blockly.JavaScript.ORDER_ATOMIC) || 'String("")';
  var value_template_name = Blockly.JavaScript.valueToCode(block, 'template_name', Blockly.JavaScript.ORDER_ATOMIC) || 'String("")';
  var value_auth = Blockly.JavaScript.valueToCode(block, 'auth', Blockly.JavaScript.ORDER_ATOMIC) || 'String("")';
  var dropdown_debug = block.getFieldValue('debug');
  
  const unplugString = str => /String\(([^\)]*)/gm.exec(str)[1];

  if (dropdown_debug === "print") {
    Blockly.JavaScript.definitions_['include']['_BLYNK_PRINT'] = '#define BLYNK_PRINT Serial';
  }
  Blockly.JavaScript.definitions_['include']['_BLYNK_DEFINE'] = 
`#define BLYNK_TEMPLATE_ID ${unplugString(value_template_id)}
#define BLYNK_TEMPLATE_NAME ${unplugString(value_template_name)}
#define BLYNK_AUTH_TOKEN ${unplugString(value_auth)}
#define BLYNK_SERVER ${unplugString(value_server)}
`;
  Blockly.JavaScript.definitions_['include']['BlynkMultiClient.h'] = '#include <BlynkMultiClient.h>';
  Blockly.JavaScript.definitions_['include']['WiFiS3.h'] = '#include <WiFiS3.h>';

  Blockly.JavaScript.definitions_['define']['blynkWiFiClient'] = 'static WiFiClient blynkWiFiClient;';

  var functionName = Blockly.JavaScript.provideFunction_(
    'connectWiFi',
    [
      'void ' + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + '() {',
      `  Serial.println("Connecting to " + ${value_ssid});`,
      '  ',
      `  WiFi.begin(${unplugString(value_ssid)}${value_pass !== '' ? `, ${unplugString(value_pass)}` : ""});`,
      '  ',
      '  while (WiFi.status() != WL_CONNECTED) {',
      '    delay(100);',
      '    Serial.print(".");',
      '  }',
      '}',
    ]
  );

  var code = `Serial.begin(115200);

${functionName}();

Blynk.addClient("WiFi", blynkWiFiClient, 80);
Blynk.config(BLYNK_AUTH_TOKEN, BLYNK_SERVER);
`;
  return code;
};

Blockly.JavaScript['blynk_on_vw1'] = function(block) {
  var dropdown_pin = block.getFieldValue('pin');
  var statements_callback = Blockly.JavaScript.statementToCode(block, 'callback');

  Blockly.JavaScript.provideFunction_(
    'BLYNK_WRITE_' + dropdown_pin,
    [
      `BLYNK_WRITE(${dropdown_pin}) {`,
      `  ${statements_callback}`,
      '}',
    ]
  );

  var code = "";
  return code;
};

Blockly.JavaScript['blynk_on_vr1'] = function(block) {
  var dropdown_pin = block.getFieldValue('pin');
  var statements_callback = Blockly.JavaScript.statementToCode(block, 'callback');

  Blockly.JavaScript.provideFunction_(
    'BLYNK_READ_' + dropdown_pin,
    [
      `BLYNK_READ(${dropdown_pin}) {`,
      `  ${statements_callback}`,
      '}',
    ]
  );

  var code = "";
  return code;
};

Blockly.JavaScript['blynk_write1'] = function(block) {
  var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC) || "";
  var dropdown_pin = block.getFieldValue('pin');

  var code = `Blynk.virtualWrite(${dropdown_pin}, ${value_value});\n`;
  return code;
};

Blockly.JavaScript['blynk_get_value_number1'] = function(block) {
  var code = 'param.asInt()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['blynk_get_value_string1'] = function(block) {
  var code = 'String(param.asString())';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['blynk_loop1'] = function(block) {
  var functionName = Blockly.JavaScript.provideFunction_(
    'blynkRun',
    [
      'void ' + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + '() {',
      '  if (WiFi.status() != WL_CONNECTED) {',
      '    connectWiFi();',
      '    return;',
      '  }',
      '  Blynk.run();',
      '}'
    ]
  );

  var code = `while(1) {
  ${functionName}();
}
`;
  return code;
};

Blockly.JavaScript['blynk_run1'] = function(block) {
  var functionName = Blockly.JavaScript.provideFunction_(
    'blynkRun',
    [
      'void ' + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + '() {',
      '  if (WiFi.status() != WL_CONNECTED) {',
      '    connectWiFi();',
      '    return;',
      '  }',
      '  Blynk.run();',
      '}'
    ]
  );

  var code = `${functionName}();\n`;
  return code;
};









