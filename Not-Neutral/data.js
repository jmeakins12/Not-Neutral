var APP_DATA = {
  "scenes": [
    {
      "id": "0-1_start",
      "name": "1_Start",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.37936060086653,
          "pitch": 0.5023188140628108,
          "rotation": 7.0685834705770345,
          "target": "1-2_element-is"
        },
        {
          "yaw": -1.4883783204709164,
          "pitch": 0.2723671016010325,
          "rotation": 0,
          "target": "4-5_yellow-wall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-2_element-is",
      "name": "2_element is",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": 0.01638764783253066,
        "pitch": 0.010437184895650375,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4360699796148069,
          "pitch": 0.532849312272802,
          "rotation": 0,
          "target": "2-3_egovernment"
        },
        {
          "yaw": 1.6388274003663303,
          "pitch": 0.6602040757993066,
          "rotation": 10.995574287564278,
          "target": "0-1_start"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-3_egovernment",
      "name": "3_EGovernment",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": -1.3929500657640652,
        "pitch": -0.028702258463031427,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.8212204413859485,
          "pitch": 0.4046885759140686,
          "rotation": 7.0685834705770345,
          "target": "3-4_government"
        },
        {
          "yaw": 0.842063416773783,
          "pitch": 0.5708156036678691,
          "rotation": 5.497787143782138,
          "target": "1-2_element-is"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-4_government",
      "name": "4_Government",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": 0.034823751644097456,
        "pitch": 0.010437184895650375,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.2532905822286509,
          "pitch": 0.4831327988149141,
          "rotation": 0.7853981633974483,
          "target": "4-5_yellow-wall"
        },
        {
          "yaw": 1.5889306312398723,
          "pitch": 0.4305259977047857,
          "rotation": 10.995574287564278,
          "target": "2-3_egovernment"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-5_yellow-wall",
      "name": "5_Yellow Wall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": -0.12700427070198828,
        "pitch": 0.013046481119566522,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.3612450507091776,
          "pitch": 0.7479717448643406,
          "rotation": 0,
          "target": "5-6_elements-in-space"
        },
        {
          "yaw": 2.1097391113313844,
          "pitch": 0.6020321851000148,
          "rotation": 5.497787143782138,
          "target": "3-4_government"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-6_elements-in-space",
      "name": "6_Elements in Space",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.0215741587164722,
          "pitch": 0.5484127003052102,
          "rotation": 0.7853981633974483,
          "target": "6-7_end"
        },
        {
          "yaw": 3.042726017276661,
          "pitch": 0.33446508124897,
          "rotation": 4.71238898038469,
          "target": "2-3_egovernment"
        },
        {
          "yaw": -2.632079474924012,
          "pitch": 0.2986015278544567,
          "rotation": 0,
          "target": "0-1_start"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-7_end",
      "name": "7_End",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": 0.21092322589727353,
        "pitch": 0.07827888671736005,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0590217225992866,
          "pitch": 0.45687821508096604,
          "rotation": 0,
          "target": "7-8_overall"
        },
        {
          "yaw": 1.46348901313657,
          "pitch": 0.6391276144212874,
          "rotation": 5.497787143782138,
          "target": "5-6_elements-in-space"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-8_overall",
      "name": "8_Overall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": 2.581066552752601,
        "pitch": 0.00009564302792242074,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
