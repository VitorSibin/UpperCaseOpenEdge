
const keywords = [
    { keyword: "+",
        "abrev": "?"
    },
    { keyword: "-",
        "abrev": "?"
    },
    { keyword: ".",
        "abrev": "?"
    },
    { keyword: "&amp;ELSE",
        "abrev": "?"
    },
    { keyword: "&amp;ELSEIF",
        "abrev": "?"
    },
    { keyword: "&amp;ENDIF",
        "abrev": "?"
    },
    { keyword: "&amp;GLOBAL-DEFINE",
        "abrev": "&amp;GLOB"
    },
    { keyword: "&amp;IF",
        "abrev": "?"
    },
    { keyword: "&amp;MESSAGE",
        "abrev": "?"
    },
    { keyword: "&amp;SCOPED-DEFINE",
        "abrev": "&amp;SCOP"
    },
    { keyword: "&amp;THEN",
        "abrev": "?"
    },
    { keyword: "&amp;UNDEFINE",
        "abrev": "&amp;UNDEF"
    },
    { keyword: "&amp;WEBSTREAM",
        "abrev": "?"
    },
    { keyword: "*",
        "abrev": "?"
    },
    { keyword: "/",
        "abrev": "?"
    },
    { keyword: ":",
        "abrev": "?"
    },
    { keyword: "?",
        "abrev": "?"
    },
    { keyword: "@",
        "abrev": "?"
    },
    { keyword: "[",
        "abrev": "?"
    },
    { keyword: "]",
        "abrev": "?"
    },
    { keyword: "^",
        "abrev": "?"
    },
    { keyword: "{&amp;BATCH-MODE}",
        "abrev": "{&amp;BATCH}"
    },
    { keyword: "{&amp;FILE-NAME}",
        "abrev": "?"
    },
    { keyword: "{&amp;LINE-NUMBER}",
        "abrev": "{&amp;LINE-NUMBE}"
    },
    { keyword: "{&amp;OPSYS}",
        "abrev": "?"
    },
    { keyword: "{&amp;PROCESS-ARCHITECTURE}",
        "abrev": "?"
    },
    { keyword: "{&amp;SEQUENCE}",
        "abrev": "?"
    },
    { keyword: "{&amp;WINDOW-SYSTEM}",
        "abrev": "{&amp;WINDOW-SYS}"
    },
    { keyword: "'",
        "abrev": "?"
    },
    { keyword: "&lt;",
        "abrev": "?"
    },
    { keyword: "&lt;=",
        "abrev": "?"
    },
    { keyword: "&lt;&gt;",
        "abrev": "?"
    },
    { keyword: "=",
        "abrev": "?"
    },
    { keyword: "&gt;",
        "abrev": "?"
    },
    { keyword: "&gt;=",
        "abrev": "?"
    },
    { keyword: "ABSOLUTE",
        "abrev": "ABS"
    },
    { keyword: "ABSTRACT",
        "abrev": "?"
    },
    { keyword: "ACCELERATOR",
        "abrev": "?"
    },
    { keyword: "ACCUM",
        "abrev": "?"
    },
    { keyword: "ACCUMULATE",
        "abrev": "ACCUM"
    },
    { keyword: "ACTIVE-FORM",
        "abrev": "?"
    },
    { keyword: "ACTIVE-WINDOW",
        "abrev": "?"
    },
    { keyword: "ADD",
        "abrev": "?"
    },
    { keyword: "ADD-BUFFER",
        "abrev": "?"
    },
    { keyword: "ADD-CALC-COLUMN",
        "abrev": "?"
    },
    { keyword: "ADD-COLUMNS-FROM",
        "abrev": "?"
    },
    { keyword: "ADD-EVENTS-PROCEDURE",
        "abrev": "?"
    },
    { keyword: "ADD-FIELDS-FROM",
        "abrev": "?"
    },
    { keyword: "ADD-FIRST",
        "abrev": "?"
    },
    { keyword: "ADD-INDEX-FIELD",
        "abrev": "?"
    },
    { keyword: "ADD-LAST",
        "abrev": "?"
    },
    { keyword: "ADD-LIKE-COLUMN",
        "abrev": "?"
    },
    { keyword: "ADD-LIKE-FIELD",
        "abrev": "?"
    },
    { keyword: "ADD-LIKE-INDEX",
        "abrev": "?"
    },
    { keyword: "ADD-NEW-FIELD",
        "abrev": "?"
    },
    { keyword: "ADD-NEW-INDEX",
        "abrev": "?"
    },
    { keyword: "ADD-SCHEMA-LOCATION",
        "abrev": "?"
    },
    { keyword: "ADD-SUPER-PROCEDURE",
        "abrev": "?"
    },
    { keyword: "ADM-DATA",
        "abrev": "?"
    },
    { keyword: "ADVISE",
        "abrev": "?"
    },
    { keyword: "AGGREGATE",
        "abrev": "?"
    },
    { keyword: "ALERT-BOX",
        "abrev": "?"
    },
    { keyword: "ALIAS",
        "abrev": "?"
    },
    { keyword: "ALL",
        "abrev": "?"
    },
    { keyword: "ALLOW-COLUMN-SEARCHING",
        "abrev": "?"
    },
    { keyword: "ALLOW-PREV-DESERIALIZATION",
        "abrev": "?"
    },
    { keyword: "ALLOW-REPLICATION",
        "abrev": "?"
    },
    { keyword: "ALTER",
        "abrev": "?"
    },
    { keyword: "ALWAYS-ON-TOP",
        "abrev": "?"
    },
    { keyword: "AMBIGUOUS",
        "abrev": "AMBIG"
    },
    { keyword: "ANALYZE",
        "abrev": "ANALYZ"
    },
    { keyword: "AND",
        "abrev": "?"
    },
    { keyword: "ANSI-ONLY",
        "abrev": "?"
    },
    { keyword: "ANY",
        "abrev": "?"
    },
    { keyword: "ANYWHERE",
        "abrev": "?"
    },
    { keyword: "APPEND",
        "abrev": "?"
    },
    { keyword: "APPL-ALERT-BOXES",
        "abrev": "APPL-ALERT"
    },
    { keyword: "APPL-CONTEXT-ID",
        "abrev": "?"
    },
    { keyword: "APPLICATION",
        "abrev": "?"
    },
    { keyword: "APPLY",
        "abrev": "?"
    },
    { keyword: "APPSERVER-INFO",
        "abrev": "?"
    },
    { keyword: "APPSERVER-PASSWORD",
        "abrev": "?"
    },
    { keyword: "APPSERVER-USERID",
        "abrev": "?"
    },
    { keyword: "ARRAY-MESSAGE",
        "abrev": "?"
    },
    { keyword: "AS",
        "abrev": "?"
    },
    { keyword: "ASC",
        "abrev": "?"
    },
    { keyword: "ASCENDING",
        "abrev": "ASC"
    },
    { keyword: "ASK-OVERWRITE",
        "abrev": "?"
    },
    { keyword: "ASSEMBLY",
        "abrev": "?"
    },
    { keyword: "ASSIGN",
        "abrev": "?"
    },
    { keyword: "ASYNCHRONOUS",
        "abrev": "?"
    },
    { keyword: "ASYNC-REQUEST-COUNT",
        "abrev": "?"
    },
    { keyword: "ASYNC-REQUEST-HANDLE",
        "abrev": "?"
    },
    { keyword: "AT",
        "abrev": "?"
    },
    { keyword: "ATTACHED-PAIRLIST",
        "abrev": "?"
    },
    { keyword: "ATTR-SPACE",
        "abrev": "ATTR"
    },
    { keyword: "AUDIT-CONTROL",
        "abrev": "?"
    },
    { keyword: "AUDIT-ENABLED",
        "abrev": "?"
    },
    { keyword: "AUDIT-EVENT-CONTEXT",
        "abrev": "?"
    },
    { keyword: "AUDIT-POLICY",
        "abrev": "?"
    },
    { keyword: "AUTHENTICATION-FAILED",
        "abrev": "?"
    },
    { keyword: "AUTHORIZATION",
        "abrev": "?"
    },
    { keyword: "AUTO-COMPLETION",
        "abrev": "AUTO-COMP"
    },
    { keyword: "AUTO-ENDKEY",
        "abrev": "?"
    },
    { keyword: "AUTO-END-KEY",
        "abrev": "?"
    },
    { keyword: "AUTO-GO",
        "abrev": "?"
    },
    { keyword: "AUTO-INDENT",
        "abrev": "AUTO-IND"
    },
    { keyword: "AUTOMATIC",
        "abrev": "?"
    },
    { keyword: "AUTO-RESIZE",
        "abrev": "?"
    },
    { keyword: "AUTO-RETURN",
        "abrev": "AUTO-RET"
    },
    { keyword: "AUTO-SYNCHRONIZE",
        "abrev": "?"
    },
    { keyword: "AUTO-ZAP",
        "abrev": "AUTO-Z"
    },
    { keyword: "AVAILABLE",
        "abrev": "AVAIL"
    },
    { keyword: "AVAILABLE-FORMATS",
        "abrev": "?"
    },
    { keyword: "AVERAGE",
        "abrev": "AVE"
    },
    { keyword: "AVG",
        "abrev": "?"
    },
    { keyword: "BACKGROUND",
        "abrev": "BACK"
    },
    { keyword: "BACKWARDS",
        "abrev": "BACKWARD"
    },
    { keyword: "BASE64-DECODE",
        "abrev": "?"
    },
    { keyword: "BASE64-ENCODE",
        "abrev": "?"
    },
    { keyword: "BASE-ADE",
        "abrev": "?"
    },
    { keyword: "BASE-KEY",
        "abrev": "?"
    },
    { keyword: "BATCH-MODE",
        "abrev": "BATCH"
    },
    { keyword: "BATCH-SIZE",
        "abrev": "?"
    },
    { keyword: "BEFORE-HIDE",
        "abrev": "BEFORE-H"
    },
    { keyword: "BEGIN-EVENT-GROUP",
        "abrev": "?"
    },
    { keyword: "BEGINS",
        "abrev": "?"
    },
    { keyword: "BELL",
        "abrev": "?"
    },
    { keyword: "BETWEEN",
        "abrev": "?"
    },
    { keyword: "BGCOLOR",
        "abrev": "BGC"
    },
    { keyword: "BIG-ENDIAN",
        "abrev": "?"
    },
    { keyword: "BINARY",
        "abrev": "?"
    },
    { keyword: "BIND",
        "abrev": "?"
    },
    { keyword: "BIND-WHERE",
        "abrev": "?"
    },
    { keyword: "BLANK",
        "abrev": "?"
    },
    { keyword: "BLOCK-ITERATION-DISPLAY",
        "abrev": "?"
    },
    { keyword: "BLOCK-LEVEL",
        "abrev": "BLOCK-LEV"
    },
    { keyword: "BORDER-BOTTOM-CHARS",
        "abrev": "BORDER-B"
    },
    { keyword: "BORDER-BOTTOM-PIXELS",
        "abrev": "BORDER-BOTTOM-P"
    },
    { keyword: "BORDER-LEFT-CHARS",
        "abrev": "BORDER-L"
    },
    { keyword: "BORDER-LEFT-PIXELS",
        "abrev": "BORDER-LEFT-P"
    },
    { keyword: "BORDER-RIGHT-CHARS",
        "abrev": "BORDER-R"
    },
    { keyword: "BORDER-RIGHT-PIXELS",
        "abrev": "BORDER-RIGHT-P"
    },
    { keyword: "BORDER-TOP-CHARS",
        "abrev": "BORDER-T"
    },
    { keyword: "BORDER-TOP-PIXELS",
        "abrev": "BORDER-TOP-P"
    },
    { keyword: "BOX",
        "abrev": "?"
    },
    { keyword: "BOX-SELECTABLE",
        "abrev": "BOX-SELECT"
    },
    { keyword: "BREAK",
        "abrev": "?"
    },
    { keyword: "BROWSE",
        "abrev": "?"
    },
    { keyword: "BUFFER",
        "abrev": "?"
    },
    { keyword: "BUFFER-CHARS",
        "abrev": "?"
    },
    { keyword: "BUFFER-COMPARE",
        "abrev": "?"
    },
    { keyword: "BUFFER-COPY",
        "abrev": "?"
    },
    { keyword: "BUFFER-CREATE",
        "abrev": "?"
    },
    { keyword: "BUFFER-DELETE",
        "abrev": "?"
    },
    { keyword: "BUFFER-FIELD",
        "abrev": "?"
    },
    { keyword: "BUFFER-HANDLE",
        "abrev": "?"
    },
    { keyword: "BUFFER-LINES",
        "abrev": "?"
    },
    { keyword: "BUFFER-NAME",
        "abrev": "?"
    },
    { keyword: "BUFFER-PARTITION-ID",
        "abrev": "?"
    },
    { keyword: "BUFFER-RELEASE",
        "abrev": "?"
    },
    { keyword: "BUFFER-VALUE",
        "abrev": "?"
    },
    { keyword: "BUTTON",
        "abrev": "?"
    },
    { keyword: "BUTTONS",
        "abrev": "BUTTON"
    },
    { keyword: "BY",
        "abrev": "?"
    },
    { keyword: "BY-POINTER",
        "abrev": "?"
    },
    { keyword: "BY-VARIANT-POINTER",
        "abrev": "?"
    },
    { keyword: "CACHE",
        "abrev": "?"
    },
    { keyword: "CACHE-SIZE",
        "abrev": "?"
    },
    { keyword: "CALL",
        "abrev": "?"
    },
    { keyword: "CALL-NAME",
        "abrev": "?"
    },
    { keyword: "CALL-TYPE",
        "abrev": "?"
    },
    { keyword: "CANCEL-BREAK",
        "abrev": "?"
    },
    { keyword: "CANCEL-BUTTON",
        "abrev": "?"
    },
    { keyword: "CAN-CREATE",
        "abrev": "?"
    },
    { keyword: "CAN-DELETE",
        "abrev": "?"
    },
    { keyword: "CAN-DO",
        "abrev": "?"
    },
    { keyword: "CAN-DO-DOMAIN-SUPPORT",
        "abrev": "?"
    },
    { keyword: "CAN-FIND",
        "abrev": "?"
    },
    { keyword: "CAN-QUERY",
        "abrev": "?"
    },
    { keyword: "CAN-READ",
        "abrev": "?"
    },
    { keyword: "CAN-SET",
        "abrev": "?"
    },
    { keyword: "CAN-WRITE",
        "abrev": "?"
    },
    { keyword: "CAPS",
        "abrev": "?"
    },
    { keyword: "CAREFUL-PAINT",
        "abrev": "?"
    },
    { keyword: "CASE",
        "abrev": "?"
    },
    { keyword: "CASE-SENSITIVE",
        "abrev": "CASE-SEN"
    },
    { keyword: "CAST",
        "abrev": "?"
    },
    { keyword: "CATCH",
        "abrev": "?"
    },
    { keyword: "CDECL",
        "abrev": "?"
    },
    { keyword: "CENTERED",
        "abrev": "CENTER"
    },
    { keyword: "CHAINED",
        "abrev": "?"
    },
    { keyword: "CHARACTER",
        "abrev": "CHAR"
    },
    { keyword: "CHARACTER_LENGTH",
        "abrev": "?"
    },
    { keyword: "CHARSET",
        "abrev": "?"
    },
    { keyword: "CHECK",
        "abrev": "?"
    },
    { keyword: "CHECKED",
        "abrev": "?"
    },
    { keyword: "CHOOSE",
        "abrev": "?"
    },
    { keyword: "CHR",
        "abrev": "?"
    },
    { keyword: "CLASS",
        "abrev": "?"
    },
    { keyword: "CLASS-TYPE",
        "abrev": "?"
    },
    { keyword: "CLEAR",
        "abrev": "?"
    },
    { keyword: "CLEAR-APPL-CONTEXT",
        "abrev": "?"
    },
    { keyword: "CLEAR-LOG",
        "abrev": "?"
    },
    { keyword: "CLEAR-SELECTION",
        "abrev": "CLEAR-SELECT"
    },
    { keyword: "CLEAR-SORT-ARROWS",
        "abrev": "CLEAR-SORT-ARROW"
    },
    { keyword: "CLIENT-CONNECTION-ID",
        "abrev": "?"
    },
    { keyword: "CLIENT-PRINCIPAL",
        "abrev": "?"
    },
    { keyword: "CLIENT-TTY",
        "abrev": "?"
    },
    { keyword: "CLIENT-TYPE",
        "abrev": "?"
    },
    { keyword: "CLIENT-WORKSTATION",
        "abrev": "?"
    },
    { keyword: "CLIPBOARD",
        "abrev": "?"
    },
    { keyword: "CLOSE",
        "abrev": "?"
    },
    { keyword: "CLOSE-LOG",
        "abrev": "?"
    },
    { keyword: "CODE",
        "abrev": "?"
    },
    { keyword: "CODEBASE-LOCATOR",
        "abrev": "?"
    },
    { keyword: "CODEPAGE",
        "abrev": "?"
    },
    { keyword: "CODEPAGE-CONVERT",
        "abrev": "?"
    },
    { keyword: "COLLATE",
        "abrev": "?"
    },
    { keyword: "COL-OF",
        "abrev": "?"
    },
    { keyword: "COLON",
        "abrev": "?"
    },
    { keyword: "COLON-ALIGNED",
        "abrev": "COLON-ALIGN"
    },
    { keyword: "COLOR",
        "abrev": "?"
    },
    { keyword: "COLOR-TABLE",
        "abrev": "?"
    },
    { keyword: "COLUMN",
        "abrev": "COL"
    },
    { keyword: "COLUMN-BGCOLOR",
        "abrev": "?"
    },
    { keyword: "COLUMN-DCOLOR",
        "abrev": "?"
    },
    { keyword: "COLUMN-FGCOLOR",
        "abrev": "?"
    },
    { keyword: "COLUMN-FONT",
        "abrev": "?"
    },
    { keyword: "COLUMN-LABEL",
        "abrev": "COLUMN-LAB"
    },
    { keyword: "COLUMN-MOVABLE",
        "abrev": "?"
    },
    { keyword: "COLUMN-OF",
        "abrev": "?"
    },
    { keyword: "COLUMN-PFCOLOR",
        "abrev": "?"
    },
    { keyword: "COLUMN-READ-ONLY",
        "abrev": "?"
    },
    { keyword: "COLUMN-RESIZABLE",
        "abrev": "?"
    },
    { keyword: "COLUMNS",
        "abrev": "?"
    },
    { keyword: "COLUMN-SCROLLING",
        "abrev": "?"
    },
    { keyword: "COMBO-BOX",
        "abrev": "?"
    },
    { keyword: "COM-HANDLE",
        "abrev": "?"
    },
    { keyword: "COMMAND",
        "abrev": "?"
    },
    { keyword: "COMPARE",
        "abrev": "?"
    },
    { keyword: "COMPARES",
        "abrev": "?"
    },
    { keyword: "COMPILE",
        "abrev": "?"
    },
    { keyword: "COMPILER",
        "abrev": "?"
    },
    { keyword: "COMPLETE",
        "abrev": "?"
    },
    { keyword: "COM-SELF",
        "abrev": "?"
    },
    { keyword: "CONFIG-NAME",
        "abrev": "?"
    },
    { keyword: "CONNECT",
        "abrev": "?"
    },
    { keyword: "CONNECTED",
        "abrev": "?"
    },
    { keyword: "CONSTRUCTOR",
        "abrev": "?"
    },
    { keyword: "CONTAINS",
        "abrev": "?"
    },
    { keyword: "CONTENTS",
        "abrev": "?"
    },
    { keyword: "CONTEXT",
        "abrev": "?"
    },
    { keyword: "CONTEXT-HELP",
        "abrev": "?"
    },
    { keyword: "CONTEXT-HELP-FILE",
        "abrev": "?"
    },
    { keyword: "CONTEXT-HELP-ID",
        "abrev": "?"
    },
    { keyword: "CONTEXT-POPUP",
        "abrev": "?"
    },
    { keyword: "CONTROL",
        "abrev": "?"
    },
    { keyword: "CONTROL-BOX",
        "abrev": "?"
    },
    { keyword: "CONTROL-FRAME",
        "abrev": "?"
    },
    { keyword: "CONVERT",
        "abrev": "?"
    },
    { keyword: "CONVERT-3D-COLORS",
        "abrev": "?"
    },
    { keyword: "CONVERT-TO-OFFSET",
        "abrev": "CONVERT-TO-OFFS"
    },
    { keyword: "COPY-DATASET",
        "abrev": "?"
    },
    { keyword: "COPY-LOB",
        "abrev": "?"
    },
    { keyword: "COPY-SAX-ATTRIBUTES",
        "abrev": "?"
    },
    { keyword: "COPY-TEMP-TABLE",
        "abrev": "?"
    },
    { keyword: "COUNT",
        "abrev": "?"
    },
    { keyword: "COUNT-OF",
        "abrev": "?"
    },
    { keyword: "CPCASE",
        "abrev": "?"
    },
    { keyword: "CPCOLL",
        "abrev": "?"
    },
    { keyword: "CPINTERNAL",
        "abrev": "?"
    },
    { keyword: "CPLOG",
        "abrev": "?"
    },
    { keyword: "CPPRINT",
        "abrev": "?"
    },
    { keyword: "CPRCODEIN",
        "abrev": "?"
    },
    { keyword: "CPRCODEOUT",
        "abrev": "?"
    },
    { keyword: "CPSTREAM",
        "abrev": "?"
    },
    { keyword: "CPTERM",
        "abrev": "?"
    },
    { keyword: "CRC-VALUE",
        "abrev": "?"
    },
    { keyword: "CREATE",
        "abrev": "?"
    },
    { keyword: "CREATE-LIKE",
        "abrev": "?"
    },
    { keyword: "CREATE-LIKE-SEQUENTIAL",
        "abrev": "?"
    },
    { keyword: "CREATE-NODE-NAMESPACE",
        "abrev": "?"
    },
    { keyword: "CREATE-RESULT-LIST-ENTRY",
        "abrev": "?"
    },
    { keyword: "CREATE-TEST-FILE",
        "abrev": "?"
    },
    { keyword: "CURRENT",
        "abrev": "?"
    },
    { keyword: "CURRENT_DATE",
        "abrev": "?"
    },
    { keyword: "CURRENT_DATE",
        "abrev": "?"
    },
    { keyword: "CURRENT-CHANGED",
        "abrev": "?"
    },
    { keyword: "CURRENT-COLUMN",
        "abrev": "?"
    },
    { keyword: "CURRENT-ENVIRONMENT",
        "abrev": "CURRENT-ENV"
    },
    { keyword: "CURRENT-ITERATION",
        "abrev": "?"
    },
    { keyword: "CURRENT-LANGUAGE",
        "abrev": "CURRENT-LANG"
    },
    { keyword: "CURRENT-QUERY",
        "abrev": "?"
    },
    { keyword: "CURRENT-REQUEST-INFO",
        "abrev": "?"
    },
    { keyword: "CURRENT-RESPONSE-INFO",
        "abrev": "?"
    },
    { keyword: "CURRENT-RESULT-ROW",
        "abrev": "?"
    },
    { keyword: "CURRENT-ROW-MODIFIED",
        "abrev": "?"
    },
    { keyword: "CURRENT-VALUE",
        "abrev": "?"
    },
    { keyword: "CURRENT-WINDOW",
        "abrev": "?"
    },
    { keyword: "CURSOR",
        "abrev": "CURS"
    },
    { keyword: "CURSOR-CHAR",
        "abrev": "?"
    },
    { keyword: "CURSOR-LINE",
        "abrev": "?"
    },
    { keyword: "CURSOR-OFFSET",
        "abrev": "?"
    },
    { keyword: "DATABASE",
        "abrev": "?"
    },
    { keyword: "DATA-BIND",
        "abrev": "?"
    },
    { keyword: "DATA-ENTRY-RETURN",
        "abrev": "DATA-ENTRY-RET"
    },
    { keyword: "DATA-RELATION",
        "abrev": "DATA-REL"
    },
    { keyword: "DATASERVERS",
        "abrev": "?"
    },
    { keyword: "DATASET",
        "abrev": "?"
    },
    { keyword: "DATASET-HANDLE",
        "abrev": "?"
    },
    { keyword: "DATA-SOURCE",
        "abrev": "?"
    },
    { keyword: "DATA-SOURCE-COMPLETE-MAP",
        "abrev": "?"
    },
    { keyword: "DATA-SOURCE-MODIFIED",
        "abrev": "?"
    },
    { keyword: "DATA-SOURCE-ROWID",
        "abrev": "?"
    },
    { keyword: "DATA-TYPE",
        "abrev": "DATA-T"
    },
    { keyword: "DATE",
        "abrev": "?"
    },
    { keyword: "DATE-FORMAT",
        "abrev": "DATE-F"
    },
    { keyword: "DAY",
        "abrev": "?"
    },
    { keyword: "DBCODEPAGE",
        "abrev": "?"
    },
    { keyword: "DBCOLLATION",
        "abrev": "?"
    },
    { keyword: "DBNAME",
        "abrev": "?"
    },
    { keyword: "DBPARAM",
        "abrev": "?"
    },
    { keyword: "DB-CONTEXT",
        "abrev": "?"
    },
    { keyword: "DB-REFERENCES",
        "abrev": "?"
    },
    { keyword: "DBRESTRICTIONS",
        "abrev": "DBREST"
    },
    { keyword: "DBTASKID",
        "abrev": "?"
    },
    { keyword: "DBTYPE",
        "abrev": "?"
    },
    { keyword: "DBVERSION",
        "abrev": "DBVERS"
    },
    { keyword: "DCOLOR",
        "abrev": "?"
    },
    { keyword: "DDE",
        "abrev": "?"
    },
    { keyword: "DDE-ERROR",
        "abrev": "?"
    },
    { keyword: "DDE-ID",
        "abrev": "DDE-I"
    },
    { keyword: "DDE-ITEM",
        "abrev": "?"
    },
    { keyword: "DDE-NAME",
        "abrev": "?"
    },
    { keyword: "DDE-TOPIC",
        "abrev": "?"
    },
    { keyword: "DEBLANK",
        "abrev": "?"
    },
    { keyword: "DEBUG",
        "abrev": "DEBU"
    },
    { keyword: "DEBUG-ALERT",
        "abrev": "?"
    },
    { keyword: "DEBUGGER",
        "abrev": "?"
    },
    { keyword: "DEBUG-LIST",
        "abrev": "?"
    },
    { keyword: "DECIMAL",
        "abrev": "DEC"
    },
    { keyword: "DECIMALS",
        "abrev": "?"
    },
    { keyword: "DECLARE",
        "abrev": "?"
    },
    { keyword: "DECLARE-NAMESPACE",
        "abrev": "?"
    },
    { keyword: "DECRYPT",
        "abrev": "?"
    },
    { keyword: "DEFAULT",
        "abrev": "?"
    },
    { keyword: "DEFAULT-BUFFER-HANDLE",
        "abrev": "?"
    },
    { keyword: "DEFAULT-BUTTON",
        "abrev": "DEFAUT-B"
    },
    { keyword: "DEFAULT-COMMIT",
        "abrev": "?"
    },
    { keyword: "DEFAULT-EXTENSION",
        "abrev": "DEFAULT-EX"
    },
    { keyword: "DEFAULT-UNTRANSLATABLE",
        "abrev": "?"
    },
    { keyword: "DEFAULT-VALUE",
        "abrev": "?"
    },
    { keyword: "DEFAULT-WINDOW",
        "abrev": "?"
    },
    { keyword: "DEFINE",
        "abrev": "DEF"
    },
    { keyword: "DEFINED",
        "abrev": "?"
    },
    { keyword: "DEFINE-USER-EVENT-MANAGER",
        "abrev": "?"
    },
    { keyword: "DELEGATE",
        "abrev": "?"
    },
    { keyword: "DELETE",
        "abrev": "DEL"
    },
    { keyword: "DELETE PROCEDURE",
        "abrev": "?"
    },
    { keyword: "DELETE-CHAR",
        "abrev": "?"
    },
    { keyword: "DELETE-CURRENT-ROW",
        "abrev": "?"
    },
    { keyword: "DELETE-LINE",
        "abrev": "?"
    },
    { keyword: "DELETE-RESULT-LIST-ENTRY",
        "abrev": "?"
    },
    { keyword: "DELETE-SELECTED-ROW",
        "abrev": "?"
    },
    { keyword: "DELETE-SELECTED-ROWS",
        "abrev": "?"
    },
    { keyword: "DELIMITER",
        "abrev": "?"
    },
    { keyword: "DESC",
        "abrev": "?"
    },
    { keyword: "DESCENDING",
        "abrev": "DESC"
    },
    { keyword: "DESELECT-FOCUSED-ROW",
        "abrev": "?"
    },
    { keyword: "DESELECTION",
        "abrev": "?"
    },
    { keyword: "DESELECT-ROWS",
        "abrev": "?"
    },
    { keyword: "DESELECT-SELECTED-ROW",
        "abrev": "?"
    },
    { keyword: "DESTRUCTOR",
        "abrev": "?"
    },
    { keyword: "DIALOG-BOX",
        "abrev": "?"
    },
    { keyword: "DICTIONARY",
        "abrev": "DICT"
    },
    { keyword: "DIR",
        "abrev": "?"
    },
    { keyword: "DISABLE",
        "abrev": "?"
    },
    { keyword: "DISABLE-AUTO-ZAP",
        "abrev": "?"
    },
    { keyword: "DISABLED",
        "abrev": "?"
    },
    { keyword: "DISABLE-DUMP-TRIGGERS",
        "abrev": "?"
    },
    { keyword: "DISABLE-LOAD-TRIGGERS",
        "abrev": "?"
    },
    { keyword: "DISCONNECT",
        "abrev": "DISCON"
    },
    { keyword: "DISP",
        "abrev": "?"
    },
    { keyword: "DISPLAY",
        "abrev": "DISP"
    },
    { keyword: "DISPLAY-MESSAGE",
        "abrev": "?"
    },
    { keyword: "DISPLAY-TYPE",
        "abrev": "DISPLAY-T"
    },
    { keyword: "DISTINCT",
        "abrev": "?"
    },
    { keyword: "DO",
        "abrev": "?"
    },
    { keyword: "DOMAIN-DESCRIPTION",
        "abrev": "?"
    },
    { keyword: "DOMAIN-NAME",
        "abrev": "?"
    },
    { keyword: "DOMAIN-TYPE",
        "abrev": "?"
    },
    { keyword: "DOS",
        "abrev": "?"
    },
    { keyword: "DOUBLE",
        "abrev": "?"
    },
    { keyword: "DOWN",
        "abrev": "?"
    },
    { keyword: "DRAG-ENABLED",
        "abrev": "?"
    },
    { keyword: "DROP",
        "abrev": "?"
    },
    { keyword: "DROP-DOWN",
        "abrev": "?"
    },
    { keyword: "DROP-DOWN-LIST",
        "abrev": "?"
    },
    { keyword: "DROP-FILE-NOTIFY",
        "abrev": "?"
    },
    { keyword: "DROP-TARGET",
        "abrev": "?"
    },
    { keyword: "ds-close-cursor",
        "abrev": "?"
    },
    { keyword: "DSLOG-MANAGER",
        "abrev": "?"
    },
    { keyword: "DUMP",
        "abrev": "?"
    },
    { keyword: "DYNAMIC",
        "abrev": "?"
    },
    { keyword: "DYNAMIC-ENUM",
        "abrev": "?"
    },
    { keyword: "DYNAMIC-FUNCTION",
        "abrev": "?"
    },
    { keyword: "DYNAMIC-INVOKE",
        "abrev": "?"
    },
    { keyword: "EACH",
        "abrev": "?"
    },
    { keyword: "ECHO",
        "abrev": "?"
    },
    { keyword: "EDGE-CHARS",
        "abrev": "EDGE"
    },
    { keyword: "EDGE-PIXELS",
        "abrev": "EDGE-P"
    },
    { keyword: "EDIT-CAN-PASTE",
        "abrev": "?"
    },
    { keyword: "EDIT-CAN-UNDO",
        "abrev": "?"
    },
    { keyword: "EDIT-CLEAR",
        "abrev": "?"
    },
    { keyword: "EDIT-COPY",
        "abrev": "?"
    },
    { keyword: "EDIT-CUT",
        "abrev": "?"
    },
    { keyword: "EDITING",
        "abrev": "?"
    },
    { keyword: "EDITOR",
        "abrev": "?"
    },
    { keyword: "EDIT-PASTE",
        "abrev": "?"
    },
    { keyword: "EDIT-UNDO",
        "abrev": "?"
    },
    { keyword: "ELSE",
        "abrev": "?"
    },
    { keyword: "EMPTY",
        "abrev": "?"
    },
    { keyword: "EMPTY-TEMP-TABLE",
        "abrev": "?"
    },
    { keyword: "ENABLE",
        "abrev": "?"
    },
    { keyword: "ENABLED-FIELDS",
        "abrev": "?"
    },
    { keyword: "ENCODE",
        "abrev": "?"
    },
    { keyword: "ENCODE-DOMAIN-ACCESS-CODE",
        "abrev": "?"
    },
    { keyword: "ENCRYPT",
        "abrev": "?"
    },
    { keyword: "ENCRYPT-AUDIT-MAC-KEY",
        "abrev": "?"
    },
    { keyword: "ENCRYPTION-SALT",
        "abrev": "?"
    },
    { keyword: "END",
        "abrev": "?"
    },
    { keyword: "END-DOCUMENT",
        "abrev": "?"
    },
    { keyword: "END-ELEMENT",
        "abrev": "?"
    },
    { keyword: "END-EVENT-GROUP",
        "abrev": "?"
    },
    { keyword: "END-FILE-DROP",
        "abrev": "?"
    },
    { keyword: "ENDKEY",
        "abrev": "?"
    },
    { keyword: "END-KEY",
        "abrev": "?"
    },
    { keyword: "END-MOVE",
        "abrev": "?"
    },
    { keyword: "END-RESIZE",
        "abrev": "?"
    },
    { keyword: "END-ROW-RESIZE",
        "abrev": "?"
    },
    { keyword: "END-USER-PROMPT",
        "abrev": "?"
    },
    { keyword: "ENTERED",
        "abrev": "?"
    },
    { keyword: "ENTITY-EXPANSION-LIMIT",
        "abrev": "?"
    },
    { keyword: "ENTRY",
        "abrev": "?"
    },
    { keyword: "ENUM",
        "abrev": "?"
    },
    { keyword: "EQ",
        "abrev": "?"
    },
    { keyword: "ERROR",
        "abrev": "?"
    },
    { keyword: "ERROR-COLUMN",
        "abrev": "ERROR-COL"
    },
    { keyword: "ERROR-OBJECT",
        "abrev": "?"
    },
    { keyword: "ERROR-ROW",
        "abrev": "?"
    },
    { keyword: "ERROR-STACK-TRACE",
        "abrev": "?"
    },
    { keyword: "ERROR-STATUS",
        "abrev": "ERROR-STAT"
    },
    { keyword: "ESCAPE",
        "abrev": "?"
    },
    { keyword: "ETIME",
        "abrev": "?"
    },
    { keyword: "EVENT",
        "abrev": "?"
    },
    { keyword: "EVENT-GROUP-ID",
        "abrev": "?"
    },
    { keyword: "EVENT-HANDLER",
        "abrev": "?"
    },
    { keyword: "EVENT-HANDLER-CONTEXT",
        "abrev": "?"
    },
    { keyword: "EVENT-PROCEDURE",
        "abrev": "?"
    },
    { keyword: "EVENT-PROCEDURE-CONTEXT",
        "abrev": "?"
    },
    { keyword: "EVENTS",
        "abrev": "?"
    },
    { keyword: "EVENT-TYPE",
        "abrev": "EVENT-T"
    },
    { keyword: "EXCEPT",
        "abrev": "?"
    },
    { keyword: "EXCLUSIVE-ID",
        "abrev": "?"
    },
    { keyword: "EXCLUSIVE-LOCK",
        "abrev": "EXCLUSIVE"
    },
    { keyword: "EXCLUSIVE-WEB-USER",
        "abrev": "?"
    },
    { keyword: "EXECUTE",
        "abrev": "?"
    },
    { keyword: "EXISTS",
        "abrev": "?"
    },
    { keyword: "EXIT-CODE",
        "abrev": "?"
    },
    { keyword: "EXP",
        "abrev": "?"
    },
    { keyword: "EXPAND",
        "abrev": "?"
    },
    { keyword: "EXPANDABLE",
        "abrev": "?"
    },
    { keyword: "EXPLICIT",
        "abrev": "?"
    },
    { keyword: "EXPORT",
        "abrev": "?"
    },
    { keyword: "EXPORT-PRINCIPAL",
        "abrev": "?"
    },
    { keyword: "EXTENDED",
        "abrev": "?"
    },
    { keyword: "EXTENT",
        "abrev": "?"
    },
    { keyword: "EXTERNAL",
        "abrev": "?"
    },
    { keyword: "FALSE",
        "abrev": "?"
    },
    { keyword: "FETCH",
        "abrev": "?"
    },
    { keyword: "FETCH-SELECTED-ROW",
        "abrev": "?"
    },
    { keyword: "FGCOLOR",
        "abrev": "FGC"
    },
    { keyword: "FIELD",
        "abrev": "?"
    },
    { keyword: "FIELDS",
        "abrev": "FIELD"
    },
    { keyword: "FILE",
        "abrev": "?"
    },
    { keyword: "FILE-CREATE-DATE",
        "abrev": "?"
    },
    { keyword: "FILE-CREATE-TIME",
        "abrev": "?"
    },
    { keyword: "FILE-INFO",
        "abrev": "?"
    },
    { keyword: "FILE-MOD-DATE",
        "abrev": "?"
    },
    { keyword: "FILE-MOD-TIME",
        "abrev": "?"
    },
    { keyword: "FILENAME",
        "abrev": "?"
    },
    { keyword: "FILE-NAME",
        "abrev": "?"
    },
    { keyword: "FILE-OFFSET",
        "abrev": "FILE-OFF"
    },
    { keyword: "FILE-SIZE",
        "abrev": "?"
    },
    { keyword: "FILE-TYPE",
        "abrev": "?"
    },
    { keyword: "FILL",
        "abrev": "?"
    },
    { keyword: "FILLED",
        "abrev": "?"
    },
    { keyword: "FILL-IN",
        "abrev": "?"
    },
    { keyword: "FILTERS",
        "abrev": "?"
    },
    { keyword: "FINAL",
        "abrev": "?"
    },
    { keyword: "FINALLY",
        "abrev": "?"
    },
    { keyword: "FIND",
        "abrev": "?"
    },
    { keyword: "FIND-BY-ROWID",
        "abrev": "?"
    },
    { keyword: "FIND-CASE-SENSITIVE",
        "abrev": "?"
    },
    { keyword: "FIND-CURRENT",
        "abrev": "?"
    },
    { keyword: "FINDER",
        "abrev": "?"
    },
    { keyword: "FIND-FIRST",
        "abrev": "?"
    },
    { keyword: "FIND-GLOBAL",
        "abrev": "?"
    },
    { keyword: "FIND-LAST",
        "abrev": "?"
    },
    { keyword: "FIND-NEXT-OCCURRENCE",
        "abrev": "?"
    },
    { keyword: "FIND-PREV-OCCURRENCE",
        "abrev": "?"
    },
    { keyword: "FIND-SELECT",
        "abrev": "?"
    },
    { keyword: "FIND-UNIQUE",
        "abrev": "?"
    },
    { keyword: "FIND-WRAP-AROUND",
        "abrev": "?"
    },
    { keyword: "FIRST",
        "abrev": "?"
    },
    { keyword: "FIRST-ASYNCH-REQUEST",
        "abrev": "?"
    },
    { keyword: "FIRST-CHILD",
        "abrev": "?"
    },
    { keyword: "FIRST-COLUMN",
        "abrev": "?"
    },
    { keyword: "FIRST-FORM",
        "abrev": "?"
    },
    { keyword: "FIRST-OBJECT",
        "abrev": "?"
    },
    { keyword: "FIRST-OF",
        "abrev": "?"
    },
    { keyword: "FIRST-PROCEDURE",
        "abrev": "FIRST-PROC"
    },
    { keyword: "FIRST-SERVER",
        "abrev": "?"
    },
    { keyword: "FIRST-TAB-ITEM",
        "abrev": "FIRST-TAB-I"
    },
    { keyword: "FIT-LAST-COLUMN",
        "abrev": "?"
    },
    { keyword: "FIXED-ONLY",
        "abrev": "?"
    },
    { keyword: "FLAT-BUTTON",
        "abrev": "?"
    },
    { keyword: "FLOAT",
        "abrev": "?"
    },
    { keyword: "FOCUS",
        "abrev": "?"
    },
    { keyword: "FOCUSED-ROW",
        "abrev": "?"
    },
    { keyword: "FOCUSED-ROW-SELECTED",
        "abrev": "?"
    },
    { keyword: "FONT",
        "abrev": "?"
    },
    { keyword: "FONT-TABLE",
        "abrev": "?"
    },
    { keyword: "FOR",
        "abrev": "?"
    },
    { keyword: "FORCE-FILE",
        "abrev": "?"
    },
    { keyword: "FOREGROUND",
        "abrev": "FORE"
    },
    { keyword: "FORM",
        "abrev": "?"
    },
    { keyword: "FORM INPUT",
        "abrev": "?"
    },
    { keyword: "FORMAT",
        "abrev": "FORM"
    },
    { keyword: "FORMATTED",
        "abrev": "FORMATTE"
    },
    { keyword: "FORM-LONG-INPUT",
        "abrev": "?"
    },
    { keyword: "FORWARD",
        "abrev": "?"
    },
    { keyword: "FORWARDS",
        "abrev": "FORWARD"
    },
    { keyword: "FRAGMENT",
        "abrev": "FRAGMEN"
    },
    { keyword: "FRAME",
        "abrev": "FRAM"
    },
    { keyword: "FRAME-COL",
        "abrev": "?"
    },
    { keyword: "FRAME-DB",
        "abrev": "?"
    },
    { keyword: "FRAME-DOWN",
        "abrev": "?"
    },
    { keyword: "FRAME-FIELD",
        "abrev": "?"
    },
    { keyword: "FRAME-FILE",
        "abrev": "?"
    },
    { keyword: "FRAME-INDEX",
        "abrev": "FRAME-INDE"
    },
    { keyword: "FRAME-LINE",
        "abrev": "?"
    },
    { keyword: "FRAME-NAME",
        "abrev": "?"
    },
    { keyword: "FRAME-ROW",
        "abrev": "?"
    },
    { keyword: "FRAME-SPACING",
        "abrev": "FRAME-SPA"
    },
    { keyword: "FRAME-VALUE",
        "abrev": "FRAME-VAL"
    },
    { keyword: "FRAME-X",
        "abrev": "?"
    },
    { keyword: "FRAME-Y",
        "abrev": "?"
    },
    { keyword: "FREQUENCY",
        "abrev": "?"
    },
    { keyword: "FROM",
        "abrev": "?"
    },
    { keyword: "FROM-CHARS",
        "abrev": "FROM-C"
    },
    { keyword: "FROM-CURRENT",
        "abrev": "FROM-CUR"
    },
    { keyword: "FROM-PIXELS",
        "abrev": "FROM-P"
    },
    { keyword: "FULL-HEIGHT-CHARS",
        "abrev": "FULL-HEIGHT"
    },
    { keyword: "FULL-HEIGHT-PIXELS",
        "abrev": "FULL-HEIGHT-P"
    },
    { keyword: "FULL-PATHNAME",
        "abrev": "FULL-PATHN"
    },
    { keyword: "FULL-WIDTH-CHARS",
        "abrev": "FULL-WIDTH"
    },
    { keyword: "FULL-WIDTH-PIXELS",
        "abrev": "FULL-WIDTH-P"
    },
    { keyword: "FUNCTION",
        "abrev": "?"
    },
    { keyword: "FUNCTION-CALL-TYPE",
        "abrev": "?"
    },
    { keyword: "GATEWAYS",
        "abrev": "GATEWAY"
    },
    { keyword: "GE",
        "abrev": "?"
    },
    { keyword: "GENERATE-PBE-KEY",
        "abrev": "?"
    },
    { keyword: "GENERATE-PBE-SALT",
        "abrev": "?"
    },
    { keyword: "GENERATE-RANDOM-KEY",
        "abrev": "?"
    },
    { keyword: "GENERATE-UUID",
        "abrev": "?"
    },
    { keyword: "GET",
        "abrev": "?"
    },
    { keyword: "GET-ATTR-CALL-TYPE",
        "abrev": "?"
    },
    { keyword: "GET-ATTRIBUTE-NODE",
        "abrev": "?"
    },
    { keyword: "GET-BINARY-DATA",
        "abrev": "?"
    },
    { keyword: "GET-BLUE-VALUE",
        "abrev": "GET-BLUE"
    },
    { keyword: "GET-BROWSE-COLUMN",
        "abrev": "?"
    },
    { keyword: "GET-BUFFER-HANDLE",
        "abrev": "?"
    },
    { keyword: "GETBYTE",
        "abrev": "?"
    },
    { keyword: "GET-BYTE",
        "abrev": "?"
    },
    { keyword: "GET-CALLBACK-PROC-CONTEXT",
        "abrev": "?"
    },
    { keyword: "GET-CALLBACK-PROC-NAME",
        "abrev": "?"
    },
    { keyword: "GET-CGI-LIST",
        "abrev": "?"
    },
    { keyword: "GET-CGI-LONG-VALUE",
        "abrev": "?"
    },
    { keyword: "GET-CGI-VALUE",
        "abrev": "?"
    },
    { keyword: "GET-CLASS",
        "abrev": "?"
    },
    { keyword: "GET-CODEPAGE",
        "abrev": "?"
    },
    { keyword: "GET-CODEPAGES",
        "abrev": "?"
    },
    { keyword: "GET-COLLATIONS",
        "abrev": "?"
    },
    { keyword: "GET-CONFIG-VALUE",
        "abrev": "?"
    },
    { keyword: "GET-CURRENT",
        "abrev": "?"
    },
    { keyword: "GET-DOUBLE",
        "abrev": "?"
    },
    { keyword: "GET-DROPPED-FILE",
        "abrev": "?"
    },
    { keyword: "GET-DYNAMIC",
        "abrev": "?"
    },
    { keyword: "GET-ERROR-COLUMN",
        "abrev": "?"
    },
    { keyword: "GET-ERROR-ROW",
        "abrev": "?"
    },
    { keyword: "GET-FILE",
        "abrev": "?"
    },
    { keyword: "GET-FILE-NAME",
        "abrev": "?"
    },
    { keyword: "GET-FILE-OFFSET",
        "abrev": "GET-FILE-OFFSE"
    },
    { keyword: "GET-FIRST",
        "abrev": "?"
    },
    { keyword: "GET-FLOAT",
        "abrev": "?"
    },
    { keyword: "GET-GREEN-VALUE",
        "abrev": "GET-GREEN"
    },
    { keyword: "GET-INDEX-BY-NAMESPACE-NAME",
        "abrev": "?"
    },
    { keyword: "GET-INDEX-BY-QNAME",
        "abrev": "?"
    },
    { keyword: "GET-INT64",
        "abrev": "?"
    },
    { keyword: "GET-ITERATION",
        "abrev": "?"
    },
    { keyword: "GET-KEY-VALUE",
        "abrev": "GET-KEY-VAL"
    },
    { keyword: "GET-LAST",
        "abrev": "?"
    },
    { keyword: "GET-LOCALNAME-BY-INDEX",
        "abrev": "?"
    },
    { keyword: "GET-LONG",
        "abrev": "?"
    },
    { keyword: "GET-MESSAGE",
        "abrev": "?"
    },
    { keyword: "GET-NEXT",
        "abrev": "?"
    },
    { keyword: "GET-NUMBER",
        "abrev": "?"
    },
    { keyword: "GET-POINTER-VALUE",
        "abrev": "?"
    },
    { keyword: "GET-PREV",
        "abrev": "?"
    },
    { keyword: "GET-PRINTERS",
        "abrev": "?"
    },
    { keyword: "GET-PROPERTY",
        "abrev": "?"
    },
    { keyword: "GET-QNAME-BY-INDEX",
        "abrev": "?"
    },
    { keyword: "GET-RED-VALUE",
        "abrev": "GET-RED"
    },
    { keyword: "GET-REPOSITIONED-ROW",
        "abrev": "?"
    },
    { keyword: "GET-RGB-VALUE",
        "abrev": "?"
    },
    { keyword: "GET-SELECTED-WIDGET",
        "abrev": "GET-SELECTED"
    },
    { keyword: "GET-SHORT",
        "abrev": "?"
    },
    { keyword: "GET-SIGNATURE",
        "abrev": "?"
    },
    { keyword: "GET-SIZE",
        "abrev": "?"
    },
    { keyword: "GET-STRING",
        "abrev": "?"
    },
    { keyword: "GET-TAB-ITEM",
        "abrev": "?"
    },
    { keyword: "GET-TEXT-HEIGHT-CHARS",
        "abrev": "GET-TEXT-HEIGHT"
    },
    { keyword: "GET-TEXT-HEIGHT-PIXELS",
        "abrev": "GET-TEXT-HEIGHT-P"
    },
    { keyword: "GET-TEXT-WIDTH-CHARS",
        "abrev": "GET-TEXT-WIDTH"
    },
    { keyword: "GET-TEXT-WIDTH-PIXELS",
        "abrev": "GET-TEXT-WIDTH-P"
    },
    { keyword: "GET-TYPE-BY-INDEX",
        "abrev": "?"
    },
    { keyword: "GET-TYPE-BY-NAMESPACE-NAME",
        "abrev": "?"
    },
    { keyword: "GET-TYPE-BY-QNAME",
        "abrev": "?"
    },
    { keyword: "GET-UNSIGNED-LONG",
        "abrev": "?"
    },
    { keyword: "GET-UNSIGNED-SHORT",
        "abrev": "?"
    },
    { keyword: "GET-URI-BY-INDEX",
        "abrev": "?"
    },
    { keyword: "GET-VALUE-BY-INDEX",
        "abrev": "?"
    },
    { keyword: "GET-VALUE-BY-NAMESPACE-NAME",
        "abrev": "?"
    },
    { keyword: "GET-VALUE-BY-QNAME",
        "abrev": "?"
    },
    { keyword: "GET-WAIT-STATE",
        "abrev": "?"
    },
    { keyword: "GLOBAL",
        "abrev": "?"
    },
    { keyword: "GO-ON",
        "abrev": "?"
    },
    { keyword: "GO-PENDING",
        "abrev": "GO-PEND"
    },
    { keyword: "GRANT",
        "abrev": "?"
    },
    { keyword: "GRAPHIC-EDGE",
        "abrev": "GRAPHIC-E"
    },
    { keyword: "GRID-FACTOR-HORIZONTAL",
        "abrev": "GRID-FACTOR-H"
    },
    { keyword: "GRID-FACTOR-VERTICAL",
        "abrev": "GRID-FACTOR-V"
    },
    { keyword: "GRID-SNAP",
        "abrev": "?"
    },
    { keyword: "GRID-UNIT-HEIGHT-CHARS",
        "abrev": "GRID-UNIT-HEIGHT"
    },
    { keyword: "GRID-UNIT-HEIGHT-PIXELS",
        "abrev": "GRID-UNIT-HEIGHT-P"
    },
    { keyword: "GRID-UNIT-WIDTH-CHARS",
        "abrev": "GRID-UNIT-WIDTH"
    },
    { keyword: "GRID-UNIT-WIDTH-PIXELS",
        "abrev": "GRID-UNIT-WIDTH-P"
    },
    { keyword: "GRID-VISIBLE",
        "abrev": "?"
    },
    { keyword: "GROUP",
        "abrev": "?"
    },
    { keyword: "GT",
        "abrev": "?"
    },
    { keyword: "GUID",
        "abrev": "?"
    },
    { keyword: "HANDLE",
        "abrev": "?"
    },
    { keyword: "HANDLER",
        "abrev": "?"
    },
    { keyword: "HAS-RECORDS",
        "abrev": "?"
    },
    { keyword: "HAVING",
        "abrev": "?"
    },
    { keyword: "HEADER",
        "abrev": "?"
    },
    { keyword: "HEIGHT-CHARS",
        "abrev": "HEIGHT"
    },
    { keyword: "HEIGHT-PIXELS",
        "abrev": "HEIGHT-P"
    },
    { keyword: "HELP",
        "abrev": "?"
    },
    { keyword: "HEX-DECODE",
        "abrev": "?"
    },
    { keyword: "HEX-ENCODE",
        "abrev": "?"
    },
    { keyword: "HIDDEN",
        "abrev": "?"
    },
    { keyword: "HIDE",
        "abrev": "?"
    },
    { keyword: "HORIZONTAL",
        "abrev": "HORI"
    },
    { keyword: "HOST-BYTE-ORDER",
        "abrev": "?"
    },
    { keyword: "HTML-CHARSET",
        "abrev": "?"
    },
    { keyword: "HTML-END-OF-LINE",
        "abrev": "?"
    },
    { keyword: "HTML-END-OF-PAGE",
        "abrev": "?"
    },
    { keyword: "HTML-FRAME-BEGIN",
        "abrev": "?"
    },
    { keyword: "HTML-FRAME-END",
        "abrev": "?"
    },
    { keyword: "HTML-HEADER-BEGIN",
        "abrev": "?"
    },
    { keyword: "HTML-HEADER-END",
        "abrev": "?"
    },
    { keyword: "HTML-TITLE-BEGIN",
        "abrev": "?"
    },
    { keyword: "HTML-TITLE-END",
        "abrev": "?"
    },
    { keyword: "HWND",
        "abrev": "?"
    },
    { keyword: "ICON",
        "abrev": "?"
    },
    { keyword: "IF",
        "abrev": "?"
    },
    { keyword: "IMAGE",
        "abrev": "?"
    },
    { keyword: "IMAGE-DOWN",
        "abrev": "?"
    },
    { keyword: "IMAGE-INSENSITIVE",
        "abrev": "?"
    },
    { keyword: "IMAGE-SIZE",
        "abrev": "?"
    },
    { keyword: "IMAGE-SIZE-CHARS",
        "abrev": "IMAGE-SIZE-C"
    },
    { keyword: "IMAGE-SIZE-PIXELS",
        "abrev": "IMAGE-SIZE-P"
    },
    { keyword: "IMAGE-UP",
        "abrev": "?"
    },
    { keyword: "IMMEDIATE-DISPLAY",
        "abrev": "?"
    },
    { keyword: "IMPLEMENTS",
        "abrev": "?"
    },
    { keyword: "IMPORT",
        "abrev": "?"
    },
    { keyword: "IMPORT-PRINCIPAL",
        "abrev": "?"
    },
    { keyword: "IN",
        "abrev": "?"
    },
    { keyword: "INCREMENT-EXCLUSIVE-ID",
        "abrev": "?"
    },
    { keyword: "INDEX",
        "abrev": "?"
    },
    { keyword: "INDEXED-REPOSITION",
        "abrev": "?"
    },
    { keyword: "INDEX-HINT",
        "abrev": "?"
    },
    { keyword: "INDEX-INFORMATION",
        "abrev": "?"
    },
    { keyword: "INDICATOR",
        "abrev": "?"
    },
    { keyword: "INFORMATION",
        "abrev": "INFO"
    },
    { keyword: "IN-HANDLE",
        "abrev": "?"
    },
    { keyword: "INHERIT-BGCOLOR",
        "abrev": "INHERIT-BGC"
    },
    { keyword: "INHERIT-FGCOLOR",
        "abrev": "INHERIT-FGC"
    },
    { keyword: "INHERITS",
        "abrev": "?"
    },
    { keyword: "INITIAL",
        "abrev": "INIT"
    },
    { keyword: "INITIAL-DIR",
        "abrev": "?"
    },
    { keyword: "INITIAL-FILTER",
        "abrev": "?"
    },
    { keyword: "INITIALIZE-DOCUMENT-TYPE",
        "abrev": "?"
    },
    { keyword: "INITIATE",
        "abrev": "?"
    },
    { keyword: "INNER-CHARS",
        "abrev": "?"
    },
    { keyword: "INNER-LINES",
        "abrev": "?"
    },
    { keyword: "INPUT",
        "abrev": "?"
    },
    { keyword: "INPUT-OUTPUT",
        "abrev": "INPUT-O"
    },
    { keyword: "INPUT-VALUE",
        "abrev": "?"
    },
    { keyword: "INSERT",
        "abrev": "?"
    },
    { keyword: "INSERT-ATTRIBUTE",
        "abrev": "?"
    },
    { keyword: "INSERT-BACKTAB",
        "abrev": "INSERT-B"
    },
    { keyword: "INSERT-FILE",
        "abrev": "?"
    },
    { keyword: "INSERT-ROW",
        "abrev": "?"
    },
    { keyword: "INSERT-STRING",
        "abrev": "?"
    },
    { keyword: "INSERT-TAB",
        "abrev": "INSERT-T"
    },
    { keyword: "INT",
        "abrev": "?"
    },
    { keyword: "INT64",
        "abrev": "?"
    },
    { keyword: "INTEGER",
        "abrev": "INT"
    },
    { keyword: "INTERFACE",
        "abrev": "?"
    },
    { keyword: "INTERNAL-ENTRIES",
        "abrev": "?"
    },
    { keyword: "INTO",
        "abrev": "?"
    },
    { keyword: "INVOKE",
        "abrev": "?"
    },
    { keyword: "IS",
        "abrev": "?"
    },
    { keyword: "IS-ATTR-SPACE",
        "abrev": "IS-ATTR"
    },
    { keyword: "IS-CLASS",
        "abrev": "IS-CLAS"
    },
    { keyword: "IS-JSON",
        "abrev": "?"
    },
    { keyword: "IS-LEAD-BYTE",
        "abrev": "IS-ATTR"
    },
    { keyword: "IS-OPEN",
        "abrev": "?"
    },
    { keyword: "IS-PARAMETER-SET",
        "abrev": "?"
    },
    { keyword: "IS-PARTITIONED",
        "abrev": "IS-PARTITIONE"
    },
    { keyword: "IS-ROW-SELECTED",
        "abrev": "?"
    },
    { keyword: "IS-SELECTED",
        "abrev": "?"
    },
    { keyword: "IS-XML",
        "abrev": "?"
    },
    { keyword: "ITEM",
        "abrev": "?"
    },
    { keyword: "ITEMS-PER-ROW",
        "abrev": "?"
    },
    { keyword: "JOIN",
        "abrev": "?"
    },
    { keyword: "JOIN-BY-SQLDB",
        "abrev": "?"
    },
    { keyword: "KBLABEL",
        "abrev": "?"
    },
    { keyword: "KEEP-CONNECTION-OPEN",
        "abrev": "?"
    },
    { keyword: "KEEP-FRAME-Z-ORDER",
        "abrev": "KEEP-FRAME-Z"
    },
    { keyword: "KEEP-MESSAGES",
        "abrev": "?"
    },
    { keyword: "KEEP-SECURITY-CACHE",
        "abrev": "?"
    },
    { keyword: "KEEP-TAB-ORDER",
        "abrev": "?"
    },
    { keyword: "KEY",
        "abrev": "?"
    },
    { keyword: "KEYCACHE-JOIN",
        "abrev": "?"
    },
    { keyword: "KEYCODE",
        "abrev": "?"
    },
    { keyword: "KEY-CODE",
        "abrev": "?"
    },
    { keyword: "KEYFUNCTION",
        "abrev": "KEYFUNC"
    },
    { keyword: "KEY-FUNCTION",
        "abrev": "KEY-FUNC"
    },
    { keyword: "KEYLABEL",
        "abrev": "?"
    },
    { keyword: "KEY-LABEL",
        "abrev": "?"
    },
    { keyword: "KEYS",
        "abrev": "?"
    },
    { keyword: "KEYWORD",
        "abrev": "?"
    },
    { keyword: "KEYWORD-ALL",
        "abrev": "?"
    },
    { keyword: "LABEL",
        "abrev": "?"
    },
    { keyword: "LABEL-BGCOLOR",
        "abrev": "LABEL-BGC"
    },
    { keyword: "LABEL-DCOLOR",
        "abrev": "LABEL-DC"
    },
    { keyword: "LABEL-FGCOLOR",
        "abrev": "LABEL-FGC"
    },
    { keyword: "LABEL-FONT",
        "abrev": "?"
    },
    { keyword: "LABEL-PFCOLOR",
        "abrev": "LABEL-PFC"
    },
    { keyword: "LABELS",
        "abrev": "?"
    },
    { keyword: "LABELS-HAVE-COLONS",
        "abrev": "?"
    },
    { keyword: "LANDSCAPE",
        "abrev": "?"
    },
    { keyword: "LANGUAGES",
        "abrev": "LANGUAGE"
    },
    { keyword: "LARGE",
        "abrev": "?"
    },
    { keyword: "LARGE-TO-SMALL",
        "abrev": "?"
    },
    { keyword: "LAST",
        "abrev": "?"
    },
    { keyword: "LAST-ASYNCH-REQUEST",
        "abrev": "?"
    },
    { keyword: "LAST-BATCH",
        "abrev": "?"
    },
    { keyword: "LAST-CHILD",
        "abrev": "?"
    },
    { keyword: "LAST-EVENT",
        "abrev": "LAST-EVEN"
    },
    { keyword: "LAST-FORM",
        "abrev": "?"
    },
    { keyword: "LASTKEY",
        "abrev": "?"
    },
    { keyword: "LAST-KEY",
        "abrev": "?"
    },
    { keyword: "LAST-OBJECT",
        "abrev": "?"
    },
    { keyword: "LAST-OF",
        "abrev": "?"
    },
    { keyword: "LAST-PROCEDURE",
        "abrev": "LAST-PROCE"
    },
    { keyword: "LAST-SERVER",
        "abrev": "?"
    },
    { keyword: "LAST-TAB-ITEM",
        "abrev": "LAST-TAB-I"
    },
    { keyword: "LC",
        "abrev": "?"
    },
    { keyword: "LDBNAME",
        "abrev": "?"
    },
    { keyword: "LE",
        "abrev": "?"
    },
    { keyword: "LEAVE",
        "abrev": "?"
    },
    { keyword: "LEFT-ALIGNED",
        "abrev": "LEFT-ALIGN"
    },
    { keyword: "LEFT-TRIM",
        "abrev": "?"
    },
    { keyword: "LENGTH",
        "abrev": "?"
    },
    { keyword: "LIBRARY",
        "abrev": "?"
    },
    { keyword: "LIKE",
        "abrev": "?"
    },
    { keyword: "LIKE-SEQUENTIAL",
        "abrev": "?"
    },
    { keyword: "LINE",
        "abrev": "?"
    },
    { keyword: "LINE-COUNTER",
        "abrev": "LINE-COUNT"
    },
    { keyword: "LIST-EVENTS",
        "abrev": "?"
    },
    { keyword: "LISTING",
        "abrev": "LISTI"
    },
    { keyword: "LIST-ITEM-PAIRS",
        "abrev": "?"
    },
    { keyword: "LIST-ITEMS",
        "abrev": "?"
    },
    { keyword: "LIST-PROPERTY-NAMES",
        "abrev": "?"
    },
    { keyword: "LIST-QUERY-ATTRS",
        "abrev": "?"
    },
    { keyword: "LIST-SET-ATTRS",
        "abrev": "?"
    },
    { keyword: "LIST-WIDGETS",
        "abrev": "?"
    },
    { keyword: "LITERAL-QUESTION",
        "abrev": "?"
    },
    { keyword: "LITTLE-ENDIAN",
        "abrev": "?"
    },
    { keyword: "LOAD",
        "abrev": "?"
    },
    { keyword: "LOAD-DOMAINS",
        "abrev": "?"
    },
    { keyword: "LOAD-ICON",
        "abrev": "?"
    },
    { keyword: "LOAD-IMAGE",
        "abrev": "?"
    },
    { keyword: "LOAD-IMAGE-DOWN",
        "abrev": "?"
    },
    { keyword: "LOAD-IMAGE-INSENSITIVE",
        "abrev": "?"
    },
    { keyword: "LOAD-IMAGE-UP",
        "abrev": "?"
    },
    { keyword: "LOAD-MOUSE-POINTER",
        "abrev": "LOAD-MOUSE-P"
    },
    { keyword: "LOAD-PICTURE",
        "abrev": "?"
    },
    { keyword: "LOAD-SMALL-ICON",
        "abrev": "?"
    },
    { keyword: "LOCAL-NAME",
        "abrev": "?"
    },
    { keyword: "LOCAL-VERSION-INFO",
        "abrev": "?"
    },
    { keyword: "LOCATOR-COLUMN-NUMBER",
        "abrev": "?"
    },
    { keyword: "LOCATOR-LINE-NUMBER",
        "abrev": "?"
    },
    { keyword: "LOCATOR-PUBLIC-ID",
        "abrev": "?"
    },
    { keyword: "LOCATOR-SYSTEM-ID",
        "abrev": "?"
    },
    { keyword: "LOCATOR-TYPE",
        "abrev": "?"
    },
    { keyword: "LOCKED",
        "abrev": "?"
    },
    { keyword: "LOCK-REGISTRATION",
        "abrev": "?"
    },
    { keyword: "LOG",
        "abrev": "?"
    },
    { keyword: "LOG-AUDIT-EVENT",
        "abrev": "?"
    },
    { keyword: "LOGICAL",
        "abrev": "?"
    },
    { keyword: "LOGIN-EXPIRATION-TIMESTAMP",
        "abrev": "?"
    },
    { keyword: "LOGIN-HOST",
        "abrev": "?"
    },
    { keyword: "LOGIN-STATE",
        "abrev": "?"
    },
    { keyword: "LOG-MANAGER",
        "abrev": "?"
    },
    { keyword: "LOGOUT",
        "abrev": "?"
    },
    { keyword: "LOOKAHEAD",
        "abrev": "?"
    },
    { keyword: "LOOKUP",
        "abrev": "?"
    },
    { keyword: "LT",
        "abrev": "?"
    },
    { keyword: "MANDATORY",
        "abrev": "?"
    },
    { keyword: "MANUAL-HIGHLIGHT",
        "abrev": "?"
    },
    { keyword: "MAP",
        "abrev": "?"
    },
    { keyword: "MARGIN-EXTRA",
        "abrev": "?"
    },
    { keyword: "MARGIN-HEIGHT-CHARS",
        "abrev": "MARGIN-HEIGHT"
    },
    { keyword: "MARGIN-HEIGHT-PIXELS",
        "abrev": "MARGIN-HEIGHT-P"
    },
    { keyword: "MARGIN-WIDTH-CHARS",
        "abrev": "MARGIN-WIDTH"
    },
    { keyword: "MARGIN-WIDTH-PIXELS",
        "abrev": "MARGIN-WIDTH-P"
    },
    { keyword: "MARK-NEW",
        "abrev": "?"
    },
    { keyword: "MARK-ROW-STATE",
        "abrev": "?"
    },
    { keyword: "MATCHES",
        "abrev": "?"
    },
    { keyword: "MAX",
        "abrev": "?"
    },
    { keyword: "MAX-BUTTON",
        "abrev": "?"
    },
    { keyword: "MAX-CHARS",
        "abrev": "?"
    },
    { keyword: "MAX-DATA-GUESS",
        "abrev": "?"
    },
    { keyword: "MAX-HEIGHT",
        "abrev": "?"
    },
    { keyword: "MAX-HEIGHT-CHARS",
        "abrev": "MAX-HEIGHT-C"
    },
    { keyword: "MAX-HEIGHT-PIXELS",
        "abrev": "MAX-HEIGHT-P"
    },
    { keyword: "MAXIMIZE",
        "abrev": "?"
    },
    { keyword: "MAXIMUM",
        "abrev": "MAX"
    },
    { keyword: "MAXIMUM-LEVEL",
        "abrev": "?"
    },
    { keyword: "MAX-ROWS",
        "abrev": "?"
    },
    { keyword: "MAX-SIZE",
        "abrev": "?"
    },
    { keyword: "MAX-VALUE",
        "abrev": "MAX-VAL"
    },
    { keyword: "MAX-WIDTH",
        "abrev": "?"
    },
    { keyword: "MAX-WIDTH-CHARS",
        "abrev": "MAX-WIDTH"
    },
    { keyword: "MAX-WIDTH-PIXELS",
        "abrev": "MAX-WIDTH-P"
    },
    { keyword: "MD5-DIGEST",
        "abrev": "?"
    },
    { keyword: "MEMBER",
        "abrev": "?"
    },
    { keyword: "MEMPTR-TO-NODE-VALUE",
        "abrev": "?"
    },
    { keyword: "MENU",
        "abrev": "?"
    },
    { keyword: "MENUBAR",
        "abrev": "?"
    },
    { keyword: "MENU-BAR",
        "abrev": "?"
    },
    { keyword: "MENU-ITEM",
        "abrev": "?"
    },
    { keyword: "MENU-KEY",
        "abrev": "MENU-K"
    },
    { keyword: "MENU-MOUSE",
        "abrev": "MENU-M"
    },
    { keyword: "MERGE-BY-FIELD",
        "abrev": "?"
    },
    { keyword: "MESSAGE",
        "abrev": "?"
    },
    { keyword: "MESSAGE-AREA",
        "abrev": "?"
    },
    { keyword: "MESSAGE-AREA-FONT",
        "abrev": "?"
    },
    { keyword: "MESSAGE-LINES",
        "abrev": "?"
    },
    { keyword: "METHOD",
        "abrev": "?"
    },
    { keyword: "MIN",
        "abrev": "?"
    },
    { keyword: "MIN-BUTTON",
        "abrev": "?"
    },
    { keyword: "MIN-COLUMN-WIDTH-CHARS",
        "abrev": "MIN-COLUMN-WIDTH-C"
    },
    { keyword: "MIN-COLUMN-WIDTH-PIXELS",
        "abrev": "MIN-COLUMN-WIDTH-P"
    },
    { keyword: "MIN-HEIGHT-CHARS",
        "abrev": "MIN-HEIGHT"
    },
    { keyword: "MIN-HEIGHT-PIXELS",
        "abrev": "MIN-HEIGHT-P"
    },
    { keyword: "MINIMUM",
        "abrev": "MIN"
    },
    { keyword: "MIN-SIZE",
        "abrev": "?"
    },
    { keyword: "MIN-VALUE",
        "abrev": "MIN-VAL"
    },
    { keyword: "MIN-WIDTH-CHARS",
        "abrev": "MIN-WIDTH"
    },
    { keyword: "MIN-WIDTH-PIXELS",
        "abrev": "MIN-WIDTH-P"
    },
    { keyword: "MODIFIED",
        "abrev": "?"
    },
    { keyword: "MODULO",
        "abrev": "MOD"
    },
    { keyword: "MONTH",
        "abrev": "?"
    },
    { keyword: "MOUSE",
        "abrev": "?"
    },
    { keyword: "MOUSE-POINTER",
        "abrev": "MOUSE-P"
    },
    { keyword: "MOVABLE",
        "abrev": "?"
    },
    { keyword: "MOVE-AFTER-TAB-ITEM",
        "abrev": "MOVE-AFTER"
    },
    { keyword: "MOVE-BEFORE-TAB-ITEM",
        "abrev": "MOVE-BEFOR"
    },
    { keyword: "MOVE-COLUMN",
        "abrev": "MOVE-COL"
    },
    { keyword: "MOVE-TO-BOTTOM",
        "abrev": "MOVE-TO-B"
    },
    { keyword: "MOVE-TO-EOF",
        "abrev": "?"
    },
    { keyword: "MOVE-TO-TOP",
        "abrev": "MOVE-TO-T"
    },
    { keyword: "MPE",
        "abrev": "?"
    },
    { keyword: "MTIME",
        "abrev": "?"
    },
    { keyword: "MULTI-COMPILE",
        "abrev": "?"
    },
    { keyword: "MULTIPLE",
        "abrev": "?"
    },
    { keyword: "MULTIPLE-KEY",
        "abrev": "?"
    },
    { keyword: "MULTITASKING-INTERVAL",
        "abrev": "?"
    },
    { keyword: "MUST-EXIST",
        "abrev": "?"
    },
    { keyword: "NAME",
        "abrev": "?"
    },
    { keyword: "NAMESPACE-PREFIX",
        "abrev": "?"
    },
    { keyword: "NAMESPACE-URI",
        "abrev": "?"
    },
    { keyword: "NATIVE",
        "abrev": "?"
    },
    { keyword: "NE",
        "abrev": "?"
    },
    { keyword: "NEEDS-APPSERVER-PROMPT",
        "abrev": "?"
    },
    { keyword: "NEEDS-PROMPT",
        "abrev": "?"
    },
    { keyword: "NEW",
        "abrev": "?"
    },
    { keyword: "NEW-INSTANCE",
        "abrev": "?"
    },
    { keyword: "NEW-ROW",
        "abrev": "?"
    },
    { keyword: "NEXT",
        "abrev": "?"
    },
    { keyword: "NEXT-COLUMN",
        "abrev": "?"
    },
    { keyword: "NEXT-PROMPT",
        "abrev": "?"
    },
    { keyword: "NEXT-ROWID",
        "abrev": "?"
    },
    { keyword: "NEXT-SIBLING",
        "abrev": "?"
    },
    { keyword: "NEXT-TAB-ITEM",
        "abrev": "NEXT-TAB-I"
    },
    { keyword: "NEXT-VALUE",
        "abrev": "?"
    },
    { keyword: "NO",
        "abrev": "?"
    },
    { keyword: "NO-APPLY",
        "abrev": "?"
    },
    { keyword: "NO-ARRAY-MESSAGE",
        "abrev": "?"
    },
    { keyword: "NO-ASSIGN",
        "abrev": "?"
    },
    { keyword: "NO-ATTR-LIST",
        "abrev": "NO-ATTR"
    },
    { keyword: "NO-ATTR-SPACE",
        "abrev": "NO-ATTR"
    },
    { keyword: "NO-AUTO-VALIDATE",
        "abrev": "?"
    },
    { keyword: "NO-BIND-WHERE",
        "abrev": "?"
    },
    { keyword: "NO-BOX",
        "abrev": "?"
    },
    { keyword: "NO-CONSOLE",
        "abrev": "?"
    },
    { keyword: "NO-CONVERT",
        "abrev": "?"
    },
    { keyword: "NO-CONVERT-3D-COLORS",
        "abrev": "?"
    },
    { keyword: "NO-CURRENT-VALUE",
        "abrev": "?"
    },
    { keyword: "NO-DEBUG",
        "abrev": "?"
    },
    { keyword: "NODE-VALUE-TO-MEMPTR",
        "abrev": "?"
    },
    { keyword: "NO-DRAG",
        "abrev": "?"
    },
    { keyword: "NO-ECHO",
        "abrev": "?"
    },
    { keyword: "NO-EMPTY-SPACE",
        "abrev": "?"
    },
    { keyword: "NO-ERROR",
        "abrev": "?"
    },
    { keyword: "NO-FILL",
        "abrev": "NO-F"
    },
    { keyword: "NO-FOCUS",
        "abrev": "?"
    },
    { keyword: "NO-HELP",
        "abrev": "?"
    },
    { keyword: "NO-HIDE",
        "abrev": "?"
    },
    { keyword: "NO-INDEX-HINT",
        "abrev": "?"
    },
    { keyword: "NO-INHERIT-BGCOLOR",
        "abrev": "NO-INHERIT-BGC"
    },
    { keyword: "NO-INHERIT-FGCOLOR",
        "abrev": "NO-INHERIT-FGC"
    },
    { keyword: "NO-JOIN-BY-SQLDB",
        "abrev": "?"
    },
    { keyword: "NO-KEYCACHE-JOIN",
        "abrev": "?"
    },
    { keyword: "NO-LABELS",
        "abrev": "NO-LABEL"
    },
    { keyword: "NO-LOBS",
        "abrev": "?"
    },
    { keyword: "NO-LOCK",
        "abrev": "?"
    },
    { keyword: "NO-LOOKAHEAD",
        "abrev": "?"
    },
    { keyword: "NO-MAP",
        "abrev": "?"
    },
    { keyword: "NO-MESSAGE",
        "abrev": "NO-MES"
    },
    { keyword: "NONAMESPACE-SCHEMA-LOCATION",
        "abrev": "?"
    },
    { keyword: "NONE",
        "abrev": "?"
    },
    { keyword: "NON-SERIALIZABLE",
        "abrev": "?"
    },
    { keyword: "NO-PAUSE",
        "abrev": "?"
    },
    { keyword: "NO-PREFETCH",
        "abrev": "NO-PREFE"
    },
    { keyword: "NORMALIZE",
        "abrev": "?"
    },
    { keyword: "NO-ROW-MARKERS",
        "abrev": "?"
    },
    { keyword: "NO-SCROLLBAR-VERTICAL",
        "abrev": "?"
    },
    { keyword: "NO-SEPARATE-CONNECTION",
        "abrev": "?"
    },
    { keyword: "NO-SEPARATORS",
        "abrev": "?"
    },
    { keyword: "NOT",
        "abrev": "?"
    },
    { keyword: "NO-TAB-STOP",
        "abrev": "?"
    },
    { keyword: "NOT-ACTIVE",
        "abrev": "?"
    },
    { keyword: "NO-UNDERLINE",
        "abrev": "NO-UND"
    },
    { keyword: "NO-UNDO",
        "abrev": "?"
    },
    { keyword: "NO-VALIDATE",
        "abrev": "NO-VAL"
    },
    { keyword: "NOW",
        "abrev": "?"
    },
    { keyword: "NO-WAIT",
        "abrev": "?"
    },
    { keyword: "NO-WORD-WRAP",
        "abrev": "?"
    },
    { keyword: "NULL",
        "abrev": "?"
    },
    { keyword: "NUM-ALIASES",
        "abrev": "NUM-ALI"
    },
    { keyword: "NUM-BUFFERS",
        "abrev": "?"
    },
    { keyword: "NUM-BUTTONS",
        "abrev": "NUM-BUT"
    },
    { keyword: "NUM-COLUMNS",
        "abrev": "NUM-COL"
    },
    { keyword: "NUM-COPIES",
        "abrev": "?"
    },
    { keyword: "NUM-DBS",
        "abrev": "?"
    },
    { keyword: "NUM-DROPPED-FILES",
        "abrev": "?"
    },
    { keyword: "NUM-ENTRIES",
        "abrev": "?"
    },
    { keyword: "NUMERIC",
        "abrev": "?"
    },
    { keyword: "NUMERIC-FORMAT",
        "abrev": "NUMERIC-F"
    },
    { keyword: "NUM-FIELDS",
        "abrev": "?"
    },
    { keyword: "NUM-FORMATS",
        "abrev": "?"
    },
    { keyword: "NUM-ITEMS",
        "abrev": "?"
    },
    { keyword: "NUM-ITERATIONS",
        "abrev": "?"
    },
    { keyword: "NUM-LINES",
        "abrev": "?"
    },
    { keyword: "NUM-LOCKED-COLUMNS",
        "abrev": "NUM-LOCKED-COL"
    },
    { keyword: "NUM-MESSAGES",
        "abrev": "?"
    },
    { keyword: "NUM-PARAMETERS",
        "abrev": "?"
    },
    { keyword: "NUM-REFERENCES",
        "abrev": "?"
    },
    { keyword: "NUM-REPLACED",
        "abrev": "?"
    },
    { keyword: "NUM-RESULTS",
        "abrev": "?"
    },
    { keyword: "NUM-SELECTED-ROWS",
        "abrev": "?"
    },
    { keyword: "NUM-SELECTED-WIDGETS",
        "abrev": "NUM-SELECTED"
    },
    { keyword: "NUM-TABS",
        "abrev": "?"
    },
    { keyword: "NUM-TO-RETAIN",
        "abrev": "?"
    },
    { keyword: "NUM-VISIBLE-COLUMNS",
        "abrev": "?"
    },
    { keyword: "OCTET-LENGTH",
        "abrev": "?"
    },
    { keyword: "OF",
        "abrev": "?"
    },
    { keyword: "OFF",
        "abrev": "?"
    },
    { keyword: "OK",
        "abrev": "?"
    },
    { keyword: "OK-CANCEL",
        "abrev": "?"
    },
    { keyword: "OLD",
        "abrev": "?"
    },
    { keyword: "ON",
        "abrev": "?"
    },
    { keyword: "ON-FRAME-BORDER",
        "abrev": "ON-FRAME"
    },
    { keyword: "OPEN",
        "abrev": "?"
    },
    { keyword: "OPSYS",
        "abrev": "?"
    },
    { keyword: "OPTION",
        "abrev": "?"
    },
    { keyword: "OPTIONS",
        "abrev": "?"
    },
    { keyword: "OPTIONS-FILE",
        "abrev": "?"
    },
    { keyword: "OR",
        "abrev": "?"
    },
    { keyword: "ORDERED-JOIN",
        "abrev": "?"
    },
    { keyword: "ORDINAL",
        "abrev": "?"
    },
    { keyword: "OS-APPEND",
        "abrev": "?"
    },
    { keyword: "OS-COMMAND",
        "abrev": "?"
    },
    { keyword: "OS-COPY",
        "abrev": "?"
    },
    { keyword: "OS-CREATE-DIR",
        "abrev": "?"
    },
    { keyword: "OS-DELETE",
        "abrev": "?"
    },
    { keyword: "OS-DIR",
        "abrev": "?"
    },
    { keyword: "OS-DRIVES",
        "abrev": "OS-DRIVE"
    },
    { keyword: "OS-ERROR",
        "abrev": "?"
    },
    { keyword: "OS-GETENV",
        "abrev": "?"
    },
    { keyword: "OS-RENAME",
        "abrev": "?"
    },
    { keyword: "OTHERWISE",
        "abrev": "?"
    },
    { keyword: "OUTPUT",
        "abrev": "?"
    },
    { keyword: "OVERLAY",
        "abrev": "?"
    },
    { keyword: "OVERRIDE",
        "abrev": "?"
    },
    { keyword: "OWNER",
        "abrev": "?"
    },
    { keyword: "PACKAGE-PRIVATE",
        "abrev": "?"
    },
    { keyword: "PACKAGE-PROTECTED",
        "abrev": "?"
    },
    { keyword: "PAGE",
        "abrev": "?"
    },
    { keyword: "PAGE-BOTTOM",
        "abrev": "PAGE-BOT"
    },
    { keyword: "PAGED",
        "abrev": "?"
    },
    { keyword: "PAGE-NUMBER",
        "abrev": "PAGE-NUM"
    },
    { keyword: "PAGE-SIZE",
        "abrev": "?"
    },
    { keyword: "PAGE-TOP",
        "abrev": "?"
    },
    { keyword: "PAGE-WIDTH",
        "abrev": "PAGE-WID"
    },
    { keyword: "PARAMETER",
        "abrev": "PARAM"
    },
    { keyword: "PARENT",
        "abrev": "?"
    },
    { keyword: "PARSE-STATUS",
        "abrev": "?"
    },
    { keyword: "PARTIAL-KEY",
        "abrev": "?"
    },
    { keyword: "PASCAL",
        "abrev": "?"
    },
    { keyword: "PASSWORD-FIELD",
        "abrev": "?"
    },
    { keyword: "PATHNAME",
        "abrev": "?"
    },
    { keyword: "PAUSE",
        "abrev": "?"
    },
    { keyword: "PBE-HASH-ALGORITHM",
        "abrev": "PBE-HASH-ALG"
    },
    { keyword: "PBE-KEY-ROUNDS",
        "abrev": "?"
    },
    { keyword: "PDBNAME",
        "abrev": "?"
    },
    { keyword: "PERSISTENT",
        "abrev": "PERSIST"
    },
    { keyword: "PERSISTENT-CACHE-DISABLED",
        "abrev": "?"
    },
    { keyword: "PFCOLOR",
        "abrev": "PFC"
    },
    { keyword: "PIXELS",
        "abrev": "?"
    },
    { keyword: "PIXELS-PER-COLUMN",
        "abrev": "PIXELS-PER-COL"
    },
    { keyword: "PIXELS-PER-ROW",
        "abrev": "?"
    },
    { keyword: "POPUP-MENU",
        "abrev": "POPUP-M"
    },
    { keyword: "POPUP-ONLY",
        "abrev": "POPUP-O"
    },
    { keyword: "PORTRAIT",
        "abrev": "?"
    },
    { keyword: "POSITION",
        "abrev": "?"
    },
    { keyword: "PRECISION",
        "abrev": "?"
    },
    { keyword: "PREFER-DATASET",
        "abrev": "?"
    },
    { keyword: "PREPARED",
        "abrev": "?"
    },
    { keyword: "PREPARE-STRING",
        "abrev": "?"
    },
    { keyword: "PREPROCESS",
        "abrev": "PREPROC"
    },
    { keyword: "PRESELECT",
        "abrev": "PRESEL"
    },
    { keyword: "PREV",
        "abrev": "?"
    },
    { keyword: "PREV-COLUMN",
        "abrev": "?"
    },
    { keyword: "PREV-SIBLING",
        "abrev": "?"
    },
    { keyword: "PREV-TAB-ITEM",
        "abrev": "PREV-TAB-I"
    },
    { keyword: "PRIMARY",
        "abrev": "?"
    },
    { keyword: "PRINTER",
        "abrev": "?"
    },
    { keyword: "PRINTER-CONTROL-HANDLE",
        "abrev": "?"
    },
    { keyword: "PRINTER-HDC",
        "abrev": "?"
    },
    { keyword: "PRINTER-NAME",
        "abrev": "?"
    },
    { keyword: "PRINTER-PORT",
        "abrev": "?"
    },
    { keyword: "PRINTER-SETUP",
        "abrev": "?"
    },
    { keyword: "PRIVATE",
        "abrev": "?"
    },
    { keyword: "PRIVATE-DATA",
        "abrev": "PRIVATE-D"
    },
    { keyword: "PRIVILEGES",
        "abrev": "?"
    },
    { keyword: "PROCEDURE",
        "abrev": "PROCE"
    },
    { keyword: "PROCEDURE-CALL-TYPE",
        "abrev": "?"
    },
    { keyword: "PROCEDURE-TYPE",
        "abrev": "?"
    },
    { keyword: "PROCESS",
        "abrev": "?"
    },
    { keyword: "PROC-HANDLE",
        "abrev": "PROC-HA"
    },
    { keyword: "PROC-STATUS",
        "abrev": "PROC-ST"
    },
    { keyword: "proc-text",
        "abrev": "?"
    },
    { keyword: "proc-text-buffer",
        "abrev": "?"
    },
    { keyword: "PROFILER",
        "abrev": "?"
    },
    { keyword: "PROGRAM-NAME",
        "abrev": "?"
    },
    { keyword: "PROGRESS",
        "abrev": "?"
    },
    { keyword: "PROGRESS-SOURCE",
        "abrev": "PROGRESS-S"
    },
    { keyword: "PROMPT",
        "abrev": "?"
    },
    { keyword: "PROMPT-FOR",
        "abrev": "PROMPT-F"
    },
    { keyword: "PROMSGS",
        "abrev": "?"
    },
    { keyword: "PROPATH",
        "abrev": "?"
    },
    { keyword: "PROPERTY",
        "abrev": "?"
    },
    { keyword: "PROTECTED",
        "abrev": "?"
    },
    { keyword: "PROVERSION",
        "abrev": "PROVERS"
    },
    { keyword: "PROXY",
        "abrev": "?"
    },
    { keyword: "PROXY-PASSWORD",
        "abrev": "?"
    },
    { keyword: "PROXY-USERID",
        "abrev": "?"
    },
    { keyword: "PUBLIC",
        "abrev": "?"
    },
    { keyword: "PUBLIC-ID",
        "abrev": "?"
    },
    { keyword: "PUBLISH",
        "abrev": "?"
    },
    { keyword: "PUBLISHED-EVENTS",
        "abrev": "?"
    },
    { keyword: "PUT",
        "abrev": "?"
    },
    { keyword: "PUTBYTE",
        "abrev": "?"
    },
    { keyword: "PUT-BYTE",
        "abrev": "?"
    },
    { keyword: "PUT-DOUBLE",
        "abrev": "?"
    },
    { keyword: "PUT-FLOAT",
        "abrev": "?"
    },
    { keyword: "PUT-INT64",
        "abrev": "?"
    },
    { keyword: "PUT-KEY-VALUE",
        "abrev": "PUT-KEY-VAL"
    },
    { keyword: "PUT-LONG",
        "abrev": "?"
    },
    { keyword: "PUT-SHORT",
        "abrev": "?"
    },
    { keyword: "PUT-STRING",
        "abrev": "?"
    },
    { keyword: "PUT-UNSIGNED-LONG",
        "abrev": "?"
    },
    { keyword: "QUERY",
        "abrev": "?"
    },
    { keyword: "QUERY-CLOSE",
        "abrev": "?"
    },
    { keyword: "QUERY-OFF-END",
        "abrev": "?"
    },
    { keyword: "QUERY-OPEN",
        "abrev": "?"
    },
    { keyword: "QUERY-PREPARE",
        "abrev": "?"
    },
    { keyword: "QUERY-TUNING",
        "abrev": "?"
    },
    { keyword: "QUESTION",
        "abrev": "?"
    },
    { keyword: "QUIT",
        "abrev": "?"
    },
    { keyword: "QUOTER",
        "abrev": "?"
    },
    { keyword: "RADIO-BUTTONS",
        "abrev": "?"
    },
    { keyword: "RADIO-SET",
        "abrev": "?"
    },
    { keyword: "RANDOM",
        "abrev": "?"
    },
    { keyword: "RAW",
        "abrev": "?"
    },
    { keyword: "RAW-TRANSFER",
        "abrev": "?"
    },
    { keyword: "RCODE-INFORMATION",
        "abrev": "RCODE-INFO"
    },
    { keyword: "READ-AVAILABLE",
        "abrev": "?"
    },
    { keyword: "READ-EXACT-NUM",
        "abrev": "?"
    },
    { keyword: "READ-FILE",
        "abrev": "?"
    },
    { keyword: "READ-JSON",
        "abrev": "?"
    },
    { keyword: "READ-ONLY",
        "abrev": "?"
    },
    { keyword: "READ-XML",
        "abrev": "?"
    },
    { keyword: "READKEY",
        "abrev": "?"
    },
    { keyword: "REAL",
        "abrev": "?"
    },
    { keyword: "RECID",
        "abrev": "?"
    },
    { keyword: "RECORD-LENGTH",
        "abrev": "?"
    },
    { keyword: "RECTANGLE",
        "abrev": "RECT"
    },
    { keyword: "RECURSIVE",
        "abrev": "?"
    },
    { keyword: "REFERENCE-ONLY",
        "abrev": "?"
    },
    { keyword: "REFRESH",
        "abrev": "?"
    },
    { keyword: "REFRESHABLE",
        "abrev": "?"
    },
    { keyword: "REFRESH-AUDIT-POLICY",
        "abrev": "?"
    },
    { keyword: "REGISTER-DOMAIN",
        "abrev": "?"
    },
    { keyword: "RELEASE",
        "abrev": "?"
    },
    { keyword: "REMOTE",
        "abrev": "?"
    },
    { keyword: "REMOVE-EVENTS-PROCEDURE",
        "abrev": "?"
    },
    { keyword: "REMOVE-SUPER-PROCEDURE",
        "abrev": "?"
    },
    { keyword: "REPEAT",
        "abrev": "?"
    },
    { keyword: "REPLACE",
        "abrev": "?"
    },
    { keyword: "REPLACE-SELECTION-TEXT",
        "abrev": "?"
    },
    { keyword: "REPOSITION",
        "abrev": "?"
    },
    { keyword: "REPOSITION-BACKWARD",
        "abrev": "?"
    },
    { keyword: "REPOSITION-FORWARD",
        "abrev": "?"
    },
    { keyword: "REPOSITION-MODE",
        "abrev": "?"
    },
    { keyword: "REPOSITION-TO-ROW",
        "abrev": "?"
    },
    { keyword: "REPOSITION-TO-ROWID",
        "abrev": "?"
    },
    { keyword: "REQUEST",
        "abrev": "?"
    },
    { keyword: "REQUEST-INFO",
        "abrev": "?"
    },
    { keyword: "RESET",
        "abrev": "?"
    },
    { keyword: "RESIZABLE",
        "abrev": "RESIZA"
    },
    { keyword: "RESIZE",
        "abrev": "?"
    },
    { keyword: "RESPONSE-INFO",
        "abrev": "?"
    },
    { keyword: "RESTART-ROW",
        "abrev": "?"
    },
    { keyword: "RESTART-ROWID",
        "abrev": "?"
    },
    { keyword: "RETAIN",
        "abrev": "?"
    },
    { keyword: "RETAIN-SHAPE",
        "abrev": "?"
    },
    { keyword: "RETRY",
        "abrev": "?"
    },
    { keyword: "RETRY-CANCEL",
        "abrev": "?"
    },
    { keyword: "RETURN",
        "abrev": "?"
    },
    { keyword: "RETURN-INSERTED",
        "abrev": "RETURN-INS"
    },
    { keyword: "RETURNS",
        "abrev": "?"
    },
    { keyword: "RETURN-TO-START-DIR",
        "abrev": "RETURN-TO-START-DI"
    },
    { keyword: "RETURN-VALUE",
        "abrev": "RETURN-VAL"
    },
    { keyword: "RETURN-VALUE-DATA-TYPE",
        "abrev": "?"
    },
    { keyword: "REVERSE-FROM",
        "abrev": "?"
    },
    { keyword: "REVERT",
        "abrev": "?"
    },
    { keyword: "REVOKE",
        "abrev": "?"
    },
    { keyword: "RGB-VALUE",
        "abrev": "?"
    },
    { keyword: "RIGHT-ALIGNED",
        "abrev": "RETURN-ALIGN"
    },
    { keyword: "RIGHT-TRIM",
        "abrev": "?"
    },
    { keyword: "R-INDEX",
        "abrev": "?"
    },
    { keyword: "ROLES",
        "abrev": "?"
    },
    { keyword: "ROUND",
        "abrev": "?"
    },
    { keyword: "ROUTINE-LEVEL",
        "abrev": "?"
    },
    { keyword: "ROW",
        "abrev": "?"
    },
    { keyword: "ROW-HEIGHT-CHARS",
        "abrev": "HEIGHT"
    },
    { keyword: "ROW-HEIGHT-PIXELS",
        "abrev": "HEIGHT-P"
    },
    { keyword: "ROWID",
        "abrev": "?"
    },
    { keyword: "ROW-MARKERS",
        "abrev": "?"
    },
    { keyword: "ROW-OF",
        "abrev": "?"
    },
    { keyword: "ROW-RESIZABLE",
        "abrev": "?"
    },
    { keyword: "RULE",
        "abrev": "?"
    },
    { keyword: "RUN",
        "abrev": "?"
    },
    { keyword: "RUN-PROCEDURE",
        "abrev": "?"
    },
    { keyword: "SAVE",
        "abrev": "?"
    },
    { keyword: "SAVE CACHE",
        "abrev": "?"
    },
    { keyword: "SAVE-AS",
        "abrev": "?"
    },
    { keyword: "SAVE-FILE",
        "abrev": "?"
    },
    { keyword: "SAX-COMPLETE",
        "abrev": "SAX-COMPLE"
    },
    { keyword: "SAX-PARSE",
        "abrev": "?"
    },
    { keyword: "SAX-PARSE-FIRST",
        "abrev": "?"
    },
    { keyword: "SAX-PARSE-NEXT",
        "abrev": "?"
    },
    { keyword: "SAX-PARSER-ERROR",
        "abrev": "?"
    },
    { keyword: "SAX-RUNNING",
        "abrev": "?"
    },
    { keyword: "SAX-UNINITIALIZED",
        "abrev": "?"
    },
    { keyword: "SAX-WRITE-BEGIN",
        "abrev": "?"
    },
    { keyword: "SAX-WRITE-COMPLETE",
        "abrev": "?"
    },
    { keyword: "SAX-WRITE-CONTENT",
        "abrev": "?"
    },
    { keyword: "SAX-WRITE-ELEMENT",
        "abrev": "?"
    },
    { keyword: "SAX-WRITE-ERROR",
        "abrev": "?"
    },
    { keyword: "SAX-WRITE-IDLE",
        "abrev": "?"
    },
    { keyword: "SAX-WRITER",
        "abrev": "?"
    },
    { keyword: "SAX-WRITE-TAG",
        "abrev": "?"
    },
    { keyword: "SCHEMA",
        "abrev": "?"
    },
    { keyword: "SCHEMA-LOCATION",
        "abrev": "?"
    },
    { keyword: "SCHEMA-MARSHAL",
        "abrev": "?"
    },
    { keyword: "SCHEMA-PATH",
        "abrev": "?"
    },
    { keyword: "SCREEN",
        "abrev": "?"
    },
    { keyword: "SCREEN-IO",
        "abrev": "?"
    },
    { keyword: "SCREEN-LINES",
        "abrev": "?"
    },
    { keyword: "SCREEN-VALUE",
        "abrev": "SCREEN-VAL"
    },
    { keyword: "SCROLL",
        "abrev": "?"
    },
    { keyword: "SCROLLABLE",
        "abrev": "?"
    },
    { keyword: "SCROLLBAR-HORIZONTAL",
        "abrev": "SCROLLBAR-H"
    },
    { keyword: "SCROLL-BARS",
        "abrev": "?"
    },
    { keyword: "SCROLLBAR-VERTICAL",
        "abrev": "SCROLLBAR-V"
    },
    { keyword: "SCROLL-DELTA",
        "abrev": "?"
    },
    { keyword: "SCROLLED-ROW-POSITION",
        "abrev": "SCROLLED-ROW-POS"
    },
    { keyword: "SCROLLING",
        "abrev": "?"
    },
    { keyword: "SCROLL-OFFSET",
        "abrev": "?"
    },
    { keyword: "SCROLL-TO-CURRENT-ROW",
        "abrev": "?"
    },
    { keyword: "SCROLL-TO-ITEM",
        "abrev": "SCROLL-TO-I"
    },
    { keyword: "SCROLL-TO-SELECTED-ROW",
        "abrev": "?"
    },
    { keyword: "SDBNAME",
        "abrev": "?"
    },
    { keyword: "SEAL",
        "abrev": "?"
    },
    { keyword: "SEAL-TIMESTAMP",
        "abrev": "?"
    },
    { keyword: "SEARCH",
        "abrev": "?"
    },
    { keyword: "SEARCH-SELF",
        "abrev": "?"
    },
    { keyword: "SEARCH-TARGER",
        "abrev": "?"
    },
    { keyword: "SECTION",
        "abrev": "?"
    },
    { keyword: "SECURITY-POLICY",
        "abrev": "?"
    },
    { keyword: "SEEK",
        "abrev": "?"
    },
    { keyword: "SELECT",
        "abrev": "?"
    },
    { keyword: "SELECTABLE",
        "abrev": "?"
    },
    { keyword: "SELECT-ALL",
        "abrev": "?"
    },
    { keyword: "SELECTED",
        "abrev": "?"
    },
    { keyword: "SELECT-FOCUSED-ROW",
        "abrev": "?"
    },
    { keyword: "SELECTION",
        "abrev": "?"
    },
    { keyword: "SELECTION-END",
        "abrev": "?"
    },
    { keyword: "SELECTION-LIST",
        "abrev": "?"
    },
    { keyword: "SELECTION-START",
        "abrev": "?"
    },
    { keyword: "SELECTION-TEXT",
        "abrev": "?"
    },
    { keyword: "SELECT-NEXT-ROW",
        "abrev": "?"
    },
    { keyword: "SELECT-PREV-ROW",
        "abrev": "?"
    },
    { keyword: "SELECT-ROW",
        "abrev": "?"
    },
    { keyword: "SELF",
        "abrev": "?"
    },
    { keyword: "SEND",
        "abrev": "?"
    },
    { keyword: "send-sql-statement",
        "abrev": "send-sql"
    },
    { keyword: "SENSITIVE",
        "abrev": "?"
    },
    { keyword: "SEPARATE-CONNECTION",
        "abrev": "?"
    },
    { keyword: "SEPARATOR-FGCOLOR",
        "abrev": "?"
    },
    { keyword: "SEPARATORS",
        "abrev": "?"
    },
    { keyword: "SERIALIZABLE",
        "abrev": "?"
    },
    { keyword: "SERIALIZE-HIDDEN",
        "abrev": "?"
    },
    { keyword: "SERIALIZE-NAME",
        "abrev": "?"
    },
    { keyword: "SERVER",
        "abrev": "?"
    },
    { keyword: "SERVER-CONNECTION-BOUND",
        "abrev": "?"
    },
    { keyword: "SERVER-CONNECTION-BOUND-REQUEST",
        "abrev": "?"
    },
    { keyword: "SERVER-CONNECTION-CONTEXT",
        "abrev": "?"
    },
    { keyword: "SERVER-CONNECTION-ID",
        "abrev": "?"
    },
    { keyword: "SERVER-OPERATING-MODE",
        "abrev": "?"
    },
    { keyword: "SESSION",
        "abrev": "?"
    },
    { keyword: "SESSION-ID",
        "abrev": "?"
    },
    { keyword: "SET",
        "abrev": "?"
    },
    { keyword: "SET-APPL-CONTEXT",
        "abrev": "?"
    },
    { keyword: "SET-ATTR-CALL-TYPE",
        "abrev": "?"
    },
    { keyword: "SET-ATTRIBUTE-NODE",
        "abrev": "?"
    },
    { keyword: "SET-BLUE-VALUE",
        "abrev": "SET-BLUE"
    },
    { keyword: "SET-BREAK",
        "abrev": "?"
    },
    { keyword: "SET-BUFFERS",
        "abrev": "?"
    },
    { keyword: "SET-CALLBACK",
        "abrev": "?"
    },
    { keyword: "SET-CLIENT",
        "abrev": "?"
    },
    { keyword: "SET-COMMIT",
        "abrev": "?"
    },
    { keyword: "SET-CONTENTS",
        "abrev": "?"
    },
    { keyword: "SET-CURRENT-VALUE",
        "abrev": "?"
    },
    { keyword: "SET-DB-CLIENT",
        "abrev": "?"
    },
    { keyword: "SET-DYNAMIC",
        "abrev": "?"
    },
    { keyword: "SET-EVENT-MANAGER-OPTION",
        "abrev": "?"
    },
    { keyword: "SET-GREEN-VALUE",
        "abrev": "SET-GREEN"
    },
    { keyword: "SET-INPUT-SOURCE",
        "abrev": "?"
    },
    { keyword: "SET-OPTION",
        "abrev": "?"
    },
    { keyword: "SET-OUTPUT-DESTINATION",
        "abrev": "?"
    },
    { keyword: "SET-PARAMETER",
        "abrev": "?"
    },
    { keyword: "SET-POINTER-VALUE",
        "abrev": "?"
    },
    { keyword: "SET-PROPERTY",
        "abrev": "?"
    },
    { keyword: "SET-RED-VALUE",
        "abrev": "SET-RED"
    },
    { keyword: "SET-REPOSITIONED-ROW",
        "abrev": "?"
    },
    { keyword: "SET-RGB-VALUE",
        "abrev": "?"
    },
    { keyword: "SET-ROLLBACK",
        "abrev": "?"
    },
    { keyword: "SET-SELECTION",
        "abrev": "?"
    },
    { keyword: "SET-SIZE",
        "abrev": "?"
    },
    { keyword: "SET-SORT-ARROW",
        "abrev": "?"
    },
    { keyword: "SETUSERID",
        "abrev": "SETUSER"
    },
    { keyword: "SET-WAIT-STATE",
        "abrev": "?"
    },
    { keyword: "SHA1-DIGEST",
        "abrev": "?"
    },
    { keyword: "SHARED",
        "abrev": "?"
    },
    { keyword: "SHARE-LOCK",
        "abrev": "SHARE"
    },
    { keyword: "SHOW-IN-TASKBAR",
        "abrev": "?"
    },
    { keyword: "SHOW-STATS",
        "abrev": "SHOW-STAT"
    },
    { keyword: "SIDE-LABEL-HANDLE",
        "abrev": "SIDE-LABEL-H"
    },
    { keyword: "SIDE-LABELS",
        "abrev": "SIDE-LAB"
    },
    { keyword: "SIGNATURE",
        "abrev": "?"
    },
    { keyword: "SIGNATURE-VALUE",
        "abrev": "?"
    },
    { keyword: "SILENT",
        "abrev": "?"
    },
    { keyword: "SIMPLE",
        "abrev": "?"
    },
    { keyword: "SINGLE",
        "abrev": "?"
    },
    { keyword: "SINGLE-RUN",
        "abrev": "?"
    },
    { keyword: "SINGLETON",
        "abrev": "?"
    },
    { keyword: "SIZE",
        "abrev": "?"
    },
    { keyword: "SIZE-CHARS",
        "abrev": "SIZE-C"
    },
    { keyword: "SIZE-PIXELS",
        "abrev": "SIZE-P"
    },
    { keyword: "SKIP",
        "abrev": "?"
    },
    { keyword: "SKIP-DELETED-RECORD",
        "abrev": "?"
    },
    { keyword: "SLIDER",
        "abrev": "?"
    },
    { keyword: "SMALL-ICON",
        "abrev": "?"
    },
    { keyword: "SMALLINT",
        "abrev": "?"
    },
    { keyword: "SMALL-TITLE",
        "abrev": "?"
    },
    { keyword: "SOME",
        "abrev": "?"
    },
    { keyword: "SORT",
        "abrev": "?"
    },
    { keyword: "SORT-ASCENDING",
        "abrev": "?"
    },
    { keyword: "SORT-NUMBER",
        "abrev": "?"
    },
    { keyword: "SOURCE",
        "abrev": "?"
    },
    { keyword: "SOURCE-PROCEDURE",
        "abrev": "?"
    },
    { keyword: "SPACE",
        "abrev": "?"
    },
    { keyword: "SQL",
        "abrev": "?"
    },
    { keyword: "SQRT",
        "abrev": "?"
    },
    { keyword: "SSL-SERVER-NAME",
        "abrev": "?"
    },
    { keyword: "STANDALONE",
        "abrev": "?"
    },
    { keyword: "START",
        "abrev": "?"
    },
    { keyword: "START-DOCUMENT",
        "abrev": "?"
    },
    { keyword: "START-ELEMENT",
        "abrev": "?"
    },
    { keyword: "START-MOVE",
        "abrev": "?"
    },
    { keyword: "START-RESIZE",
        "abrev": "?"
    },
    { keyword: "START-ROW-RESIZE",
        "abrev": "?"
    },
    { keyword: "STATE-DETAIL",
        "abrev": "?"
    },
    { keyword: "STATIC",
        "abrev": "?"
    },
    { keyword: "STATUS",
        "abrev": "?"
    },
    { keyword: "STATUS-AREA",
        "abrev": "?"
    },
    { keyword: "STATUS-AREA-FONT",
        "abrev": "?"
    },
    { keyword: "STDCALL",
        "abrev": "?"
    },
    { keyword: "STOP",
        "abrev": "?"
    },
    { keyword: "STOP-AFTER",
        "abrev": "?"
    },
    { keyword: "STOP-OBJECT",
        "abrev": "?"
    },
    { keyword: "STOP-PARSING",
        "abrev": "?"
    },
    { keyword: "STOPPED",
        "abrev": "STOPPE"
    },
    { keyword: "STORED-PROCEDURE",
        "abrev": "STORED-PROC"
    },
    { keyword: "STREAM",
        "abrev": "?"
    },
    { keyword: "STREAM-HANDLE",
        "abrev": "?"
    },
    { keyword: "STREAM-IO",
        "abrev": "?"
    },
    { keyword: "STRETCH-TO-FIT",
        "abrev": "?"
    },
    { keyword: "STRICT",
        "abrev": "?"
    },
    { keyword: "STRICT-ENTITY-RESOLUTION",
        "abrev": "?"
    },
    { keyword: "STRING",
        "abrev": "?"
    },
    { keyword: "STRING-VALUE",
        "abrev": "?"
    },
    { keyword: "STRING-XREF",
        "abrev": "?"
    },
    { keyword: "SUB-AVERAGE",
        "abrev": "SUB-AVE"
    },
    { keyword: "SUB-COUNT",
        "abrev": "?"
    },
    { keyword: "SUB-MAXIMUM",
        "abrev": "SUM-MAX"
    },
    { keyword: "SUB-MENU",
        "abrev": "SUB-"
    },
    { keyword: "SUB-MINIMUM",
        "abrev": "SUB-MIN"
    },
    { keyword: "SUBSCRIBE",
        "abrev": "?"
    },
    { keyword: "SUBSTITUTE",
        "abrev": "SUBST"
    },
    { keyword: "SUBSTRING",
        "abrev": "SUBSTR"
    },
    { keyword: "SUB-TOTAL",
        "abrev": "?"
    },
    { keyword: "SUBTYPE",
        "abrev": "?"
    },
    { keyword: "SUM",
        "abrev": "?"
    },
    { keyword: "SUPER",
        "abrev": "?"
    },
    { keyword: "SUPER-PROCEDURES",
        "abrev": "?"
    },
    { keyword: "SUPPRESS-NAMESPACE-PROCESSING",
        "abrev": "?"
    },
    { keyword: "SUPPRESS-WARNINGS",
        "abrev": "SUPPRESS-W"
    },
    { keyword: "SYMMETRIC-ENCRYPTION-ALGORITHM",
        "abrev": "?"
    },
    { keyword: "SYMMETRIC-ENCRYPTION-IV",
        "abrev": "?"
    },
    { keyword: "SYMMETRIC-ENCRYPTION-KEY",
        "abrev": "?"
    },
    { keyword: "SYMMETRIC-SUPPORT",
        "abrev": "?"
    },
    { keyword: "SYSTEM-ALERT-BOXES",
        "abrev": "SYSTEM-ALERT"
    },
    { keyword: "SYSTEM-DIALOG",
        "abrev": "?"
    },
    { keyword: "SYSTEM-HELP",
        "abrev": "?"
    },
    { keyword: "SYSTEM-ID",
        "abrev": "?"
    },
    { keyword: "TABLE",
        "abrev": "?"
    },
    { keyword: "TABLE-HANDLE",
        "abrev": "?"
    },
    { keyword: "TABLE-NUMBER",
        "abrev": "?"
    },
    { keyword: "TABLE-SCAN",
        "abrev": "?"
    },
    { keyword: "TAB-POSITION",
        "abrev": "?"
    },
    { keyword: "TAB-STOP",
        "abrev": "?"
    },
    { keyword: "TARGET",
        "abrev": "?"
    },
    { keyword: "TARGET-PROCEDURE",
        "abrev": "?"
    },
    { keyword: "TEMP-DIRECTORY",
        "abrev": "TEMP-DIR"
    },
    { keyword: "TEMP-TABLE",
        "abrev": "?"
    },
    { keyword: "TEMP-TABLE-PREPARE",
        "abrev": "?"
    },
    { keyword: "TERM",
        "abrev": "?"
    },
    { keyword: "TERMINAL",
        "abrev": "TERM"
    },
    { keyword: "TERMINATE",
        "abrev": "?"
    },
    { keyword: "TEXT",
        "abrev": "?"
    },
    { keyword: "TEXT-CURSOR",
        "abrev": "?"
    },
    { keyword: "TEXT-SEG-GROW",
        "abrev": "?"
    },
    { keyword: "TEXT-SELECTED",
        "abrev": "?"
    },
    { keyword: "THEN",
        "abrev": "?"
    },
    { keyword: "THIS-OBJECT",
        "abrev": "?"
    },
    { keyword: "THIS-PROCEDURE",
        "abrev": "?"
    },
    { keyword: "THREAD-SAFE",
        "abrev": "?"
    },
    { keyword: "THREE-D",
        "abrev": "?"
    },
    { keyword: "THROW",
        "abrev": "?"
    },
    { keyword: "THROUGH",
        "abrev": "?"
    },
    { keyword: "THRU",
        "abrev": "?"
    },
    { keyword: "TIC-MARKS",
        "abrev": "?"
    },
    { keyword: "TIME",
        "abrev": "?"
    },
    { keyword: "TIME-SOURCE",
        "abrev": "?"
    },
    { keyword: "TITLE",
        "abrev": "?"
    },
    { keyword: "TITLE-BGCOLOR",
        "abrev": "TITLE-BGC"
    },
    { keyword: "TITLE-DCOLOR",
        "abrev": "TITLE-DC"
    },
    { keyword: "TITLE-FGCOLOR",
        "abrev": "TITLE-FGC"
    },
    { keyword: "TITLE-FONT",
        "abrev": "TITLE-FO"
    },
    { keyword: "TO",
        "abrev": "?"
    },
    { keyword: "TODAY",
        "abrev": "?"
    },
    { keyword: "TOGGLE-BOX",
        "abrev": "?"
    },
    { keyword: "TOOLTIP",
        "abrev": "?"
    },
    { keyword: "TOOLTIPS",
        "abrev": "?"
    },
    { keyword: "TOPIC",
        "abrev": "?"
    },
    { keyword: "TOP-NAV-QUERY",
        "abrev": "?"
    },
    { keyword: "TOP-ONLY",
        "abrev": "?"
    },
    { keyword: "TO-ROWID",
        "abrev": "?"
    },
    { keyword: "TOTAL",
        "abrev": "?"
    },
    { keyword: "TRAILING",
        "abrev": "?"
    },
    { keyword: "TRANS",
        "abrev": "?"
    },
    { keyword: "TRANSACTION",
        "abrev": "?"
    },
    { keyword: "TRANSACTION-MODE",
        "abrev": "?"
    },
    { keyword: "TRANS-INIT-PROCEDURE",
        "abrev": "?"
    },
    { keyword: "TRANSPARENT",
        "abrev": "?"
    },
    { keyword: "TRIGGER",
        "abrev": "?"
    },
    { keyword: "TRIGGERS",
        "abrev": "?"
    },
    { keyword: "TRIM",
        "abrev": "?"
    },
    { keyword: "TRUE",
        "abrev": "?"
    },
    { keyword: "TRUNCATE",
        "abrev": "TRUNC"
    },
    { keyword: "TYPE",
        "abrev": "?"
    },
    { keyword: "TYPE-OF",
        "abrev": "?"
    },
    { keyword: "UNBOX",
        "abrev": "?"
    },
    { keyword: "UNBUFFERED",
        "abrev": "UNBUFF"
    },
    { keyword: "UNDERLINE",
        "abrev": "UNDERL"
    },
    { keyword: "UNDO",
        "abrev": "?"
    },
    { keyword: "UNFORMATTED",
        "abrev": "UNFORM"
    },
    { keyword: "UNION",
        "abrev": "?"
    },
    { keyword: "UNIQUE",
        "abrev": "?"
    },
    { keyword: "UNIQUE-ID",
        "abrev": "?"
    },
    { keyword: "UNIQUE-MATCH",
        "abrev": "?"
    },
    { keyword: "UNIX",
        "abrev": "?"
    },
    { keyword: "UNLESS-HIDDEN",
        "abrev": "?"
    },
    { keyword: "UNLOAD",
        "abrev": "?"
    },
    { keyword: "UNSIGNED-LONG",
        "abrev": "?"
    },
    { keyword: "UNSUBSCRIBE",
        "abrev": "?"
    },
    { keyword: "UP",
        "abrev": "?"
    },
    { keyword: "UPDATE",
        "abrev": "?"
    },
    { keyword: "UPDATE-ATTRIBUTE",
        "abrev": "?"
    },
    { keyword: "URL",
        "abrev": "?"
    },
    { keyword: "URL-DECODE",
        "abrev": "?"
    },
    { keyword: "URL-ENCODE",
        "abrev": "?"
    },
    { keyword: "URL-PASSWORD",
        "abrev": "?"
    },
    { keyword: "URL-USERID",
        "abrev": "?"
    },
    { keyword: "USE",
        "abrev": "?"
    },
    { keyword: "USE-DICT-EXPS",
        "abrev": "?"
    },
    { keyword: "USE-FILENAME",
        "abrev": "?"
    },
    { keyword: "USE-INDEX",
        "abrev": "?"
    },
    { keyword: "USER",
        "abrev": "?"
    },
    { keyword: "USE-REVVIDEO",
        "abrev": "?"
    },
    { keyword: "USERID",
        "abrev": "?"
    },
    { keyword: "USER-ID",
        "abrev": "?"
    },
    { keyword: "USE-TEXT",
        "abrev": "?"
    },
    { keyword: "USE-UNDERLINE",
        "abrev": "?"
    },
    { keyword: "USE-WIDGET-POOL",
        "abrev": "?"
    },
    { keyword: "USING",
        "abrev": "?"
    },
    { keyword: "V6DISPLAY",
        "abrev": "?"
    },
    { keyword: "V6FRAME",
        "abrev": "?"
    },
    { keyword: "VALIDATE",
        "abrev": "?"
    },
    { keyword: "VALIDATE-DOMAIN-ACCESS-CODE",
        "abrev": "?"
    },
    { keyword: "VALIDATE-EXPRESSION",
        "abrev": "?"
    },
    { keyword: "VALIDATE-MESSAGE",
        "abrev": "?"
    },
    { keyword: "VALIDATE-SEAL",
        "abrev": "?"
    },
    { keyword: "VALIDATION-ENABLED",
        "abrev": "?"
    },
    { keyword: "VALID-EVENT",
        "abrev": "?"
    },
    { keyword: "VALID-HANDLE",
        "abrev": "?"
    },
    { keyword: "VALID-OBJECT",
        "abrev": "?"
    },
    { keyword: "VALUE",
        "abrev": "?"
    },
    { keyword: "VALUE-CHANGED",
        "abrev": "?"
    },
    { keyword: "VALUES",
        "abrev": "?"
    },
    { keyword: "VAR",
        "abrev": "?"
    },
    { keyword: "VARIABLE",
        "abrev": "VAR"
    },
    { keyword: "VERBOSE",
        "abrev": "?"
    },
    { keyword: "VERSION",
        "abrev": "?"
    },
    { keyword: "VERTICAL",
        "abrev": "VERT"
    },
    { keyword: "VIEW",
        "abrev": "?"
    },
    { keyword: "VIEW-AS",
        "abrev": "?"
    },
    { keyword: "VIEW-FIRST-COLUMN-ON-REOPEN",
        "abrev": "?"
    },
    { keyword: "VIRTUAL-HEIGHT-CHARS",
        "abrev": "VIRTUAL-HEIGHT"
    },
    { keyword: "VIRTUAL-HEIGHT-PIXELS",
        "abrev": "VIRTUAL-HEIGHT-P"
    },
    { keyword: "VIRTUAL-WIDTH-CHARS",
        "abrev": "VIRTUAL-WIDTH"
    },
    { keyword: "VIRTUAL-WIDTH-PIXELS",
        "abrev": "VIRTUAL-WIDTH-P"
    },
    { keyword: "VISIBLE",
        "abrev": "?"
    },
    { keyword: "VOID",
        "abrev": "?"
    },
    { keyword: "WAIT",
        "abrev": "?"
    },
    { keyword: "WAIT-FOR",
        "abrev": "?"
    },
    { keyword: "WARNING",
        "abrev": "?"
    },
    { keyword: "WEB-CONTEXT",
        "abrev": "?"
    },
    { keyword: "WEEKDAY",
        "abrev": "?"
    },
    { keyword: "WHEN",
        "abrev": "?"
    },
    { keyword: "WHERE",
        "abrev": "?"
    },
    { keyword: "WHILE",
        "abrev": "?"
    },
    { keyword: "WIDGET",
        "abrev": "?"
    },
    { keyword: "WIDGET-ENTER",
        "abrev": "WIDGET-E"
    },
    { keyword: "WIDGET-ID",
        "abrev": "?"
    },
    { keyword: "WIDGET-LEAVE",
        "abrev": "WIDGET-L"
    },
    { keyword: "WIDGET-POOL",
        "abrev": "?"
    },
    { keyword: "WIDTH",
        "abrev": "?"
    },
    { keyword: "WIDTH-CHARS",
        "abrev": "WIDTH"
    },
    { keyword: "WIDTH-PIXELS",
        "abrev": "WIDTH-P"
    },
    { keyword: "WINDOW",
        "abrev": "?"
    },
    { keyword: "WINDOW-MAXIMIZED",
        "abrev": "WINDOW-MAXIM"
    },
    { keyword: "WINDOW-MINIMIZED",
        "abrev": "WINDOW-MINIM"
    },
    { keyword: "WINDOW-NAME",
        "abrev": "?"
    },
    { keyword: "WINDOW-NORMAL",
        "abrev": "?"
    },
    { keyword: "WINDOW-STATE",
        "abrev": "WINDOW-STA"
    },
    { keyword: "WINDOW-SYSTEM",
        "abrev": "?"
    },
    { keyword: "WITH",
        "abrev": "?"
    },
    { keyword: "WORD-INDEX",
        "abrev": "?"
    },
    { keyword: "WORD-WRAP",
        "abrev": "?"
    },
    { keyword: "WORK-AREA-HEIGHT-PIXELS",
        "abrev": "?"
    },
    { keyword: "WORK-AREA-WIDTH-PIXELS",
        "abrev": "?"
    },
    { keyword: "WORK-AREA-X",
        "abrev": "?"
    },
    { keyword: "WORK-AREA-Y",
        "abrev": "?"
    },
    { keyword: "WORKFILE",
        "abrev": "?"
    },
    { keyword: "WORK-TABLE",
        "abrev": "WORK-TAB"
    },
    { keyword: "WRITE",
        "abrev": "?"
    },
    { keyword: "WRITE-CDATA",
        "abrev": "?"
    },
    { keyword: "WRITE-CHARACTERS",
        "abrev": "?"
    },
    { keyword: "WRITE-COMMENT",
        "abrev": "?"
    },
    { keyword: "WRITE-DATA-ELEMENT",
        "abrev": "?"
    },
    { keyword: "WRITE-EMPTY-ELEMENT",
        "abrev": "?"
    },
    { keyword: "WRITE-ENTITY-REF",
        "abrev": "?"
    },
    { keyword: "WRITE-EXTERNAL-DTD",
        "abrev": "?"
    },
    { keyword: "WRITE-FRAGMENT",
        "abrev": "?"
    },
    { keyword: "WRITE-JSON",
        "abrev": "?"
    },
    { keyword: "WRITE-MESSAGE",
        "abrev": "?"
    },
    { keyword: "WRITE-PROCESSING-INSTRUCTION",
        "abrev": "?"
    },
    { keyword: "WRITE-STATUS",
        "abrev": "?"
    },
    { keyword: "WRITE-XML",
        "abrev": "?"
    },
    { keyword: "WRITE-XMLSCHEMA",
        "abrev": "?"
    },
    { keyword: "X",
        "abrev": "?"
    },
    { keyword: "XCODE",
        "abrev": "?"
    },
    { keyword: "XML-DATA-TYPE",
        "abrev": "?"
    },
    { keyword: "XML-ENTITY-EXPANSION-LIMIT",
        "abrev": "?"
    },
    { keyword: "XML-NODE-TYPE",
        "abrev": "?"
    },
    { keyword: "XML-SCHEMA-PATH",
        "abrev": "?"
    },
    { keyword: "XML-STRICT-ENTITY-RESOLUTION",
        "abrev": "?"
    },
    { keyword: "XML-SUPPRESS-NAMESPACE-PROCESSING",
        "abrev": "?"
    },
    { keyword: "X-OF",
        "abrev": "?"
    },
    { keyword: "XREF",
        "abrev": "?"
    },
    { keyword: "XREF-XML",
        "abrev": "?"
    },
    { keyword: "Y",
        "abrev": "?"
    },
    { keyword: "YEAR",
        "abrev": "?"
    },
    { keyword: "YEAR-OFFSET",
        "abrev": "?"
    },
    { keyword: "YES",
        "abrev": "?"
    },
    { keyword: "YES-NO",
        "abrev": "?"
    },
    { keyword: "YES-NO-CANCEL",
        "abrev": "?"
    },
    { keyword: "Y-OF",
        "abrev": "?"
    }
];

export default keywords;

