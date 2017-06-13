$(document).ready(function(){
    var $ = go.GraphObject.make;  // for conciseness in defining templates
    myDiagram = $(go.Diagram, "myDiagramDiv",  // create a Diagram for the DIV HTML element
                  {//layout:"new go.layoutdeigrpah "
                  layout: $(go.LayeredDigraphLayout, {
                    layeringOption : go.LayeredDigraphLayout.LayerOptimalLinkLength,
                    direction: 0
                  }),
                    initialContentAlignment: go.Spot.Center,  // center the content
                    "undoManager.isEnabled": true  // enable undo & redo
                  });
    //myDiagram.add($(go.Part, "Vertical", {background: "lightgray", width: 140 }));
    // define a simple Node template
    myDiagram.nodeTemplate =
      $(go.Node, "Vertical",   // the Shape will go around the TextBlock
        $(go.Picture, {
          desiredSize: new go.Size(24, 24),
          
        }, new go.Binding("source", "path")  ),
       
        $(go.TextBlock,
          { margin: 4,
            width: 75,
            alignment: go.Spot.Left,
          maxSize: new go.Size(440, Infinity), },  // some room around the text
          // TextBlock.text is bound to Node.data.key
          new go.Binding("text", "text")),
      );

   
      
      myDiagram.groupTemplate=$(go.Group, 'Vertical',{
        background: "yellow",
       mouseHover:function(event, obj){   
        var group=obj.part;
        if(group.isSubGraphExpanded ){
        myDiagram.commandHandler.collapseSubGraph( group );
      }else{
          myDiagram.commandHandler.expandSubGraph( group );
        }//eof if
      }
       }, {//layout:"new go.layoutdeigrpah "
                  layout: $(go.LayeredDigraphLayout, {layeringOption : go.LayeredDigraphLayout.LayerOptimalLinkLength }) } , $(go.TextBlock,
          { margin: 8 },  // some room around the text
          // TextBlock.text is bound to Node.data.key
          new go.Binding("text", "key") ),
           $(go.Placeholder));


    // but use the default Link template, by not setting Diagram.linkTemplate
    // create the model data that will be represented by Nodes and Links
    
     var node1 =
    $(go.Node, "Auto",
      $(go.Shape,
        { figure: "RoundedRectangle",
          fill: "green" }),
      $(go.TextBlock,
        { text: "Alpha",
          margin: 5 })
    )
    //myDiagram.model.addLinkData([{ key: "d", color: "green" },{ from: "d", to: "Beta" }])
    //myDiagram.add(node1);

  


      var data = {
  "nodeList": [
    {
      "key": "215_27216",
      "calledGraphId": null,
      "text": "Create a BasicBot",
      "description": [
        "Create a BasicBot"
      ],
      "category": "OfActivity",
      "topoIndex": 13.0,
      "forwardDepth": 0.0,
      "backwardDepth": 8.0,
      "codeReference": {
        "fileName": "ozsoft/texasholdem/bots/BasicBot.java",
        "lineStart": 75,
        "lineEnd": 84
      }
    },
    {
      "key": "215_27181",
      "calledGraphId": null,
      "text": "to remove? if (tightness is lower than 0) or (tightness is greater than 100)",
      "description": [
        "if (tightness is lower than 0) or (tightness is greater than 100)"
      ],
      "category": "OfCondition",
      "topoIndex": 58.0,
      "forwardDepth": 9.0,
      "backwardDepth": 9.0,
      "codeReference": {
        "fileName": "ozsoft/texasholdem/bots/BasicBot.java",
        "lineStart": 76,
        "lineEnd": 78
      },
      "isGroup": true
    },
    {
      "key": "215_27164",
      "calledGraphId": null,
      "text": "tightness is lower than 0",
      "description": [
        "tightness is lower than 0"
      ],
      "category": "OfActivity",
      "topoIndex": 54.0,
      "forwardDepth": 3.0,
      "backwardDepth": 5.0,
      "codeReference": {
        "fileName": "ozsoft/texasholdem/bots/BasicBot.java",
        "lineStart": 76,
        "lineEnd": 76
      }
    },
    {
      "key": "215_27161",
      "calledGraphId": null,
      "text": "tightness",
      "description": [
        "tightness"
      ],
      "category": "OfActivity",
      "topoIndex": 43.0,
      "forwardDepth": 1.0,
      "backwardDepth": 1.0,
      "codeReference": {
        "fileName": "ozsoft/texasholdem/bots/BasicBot.java",
        "lineStart": 76,
        "lineEnd": 76
      }
    },
    {
      "key": "215_27168",
      "calledGraphId": null,
      "text": "tightness is greater than 100",
      "description": [
        "tightness is greater than 100"
      ],
      "category": "OfActivity",
      "topoIndex": 52.0,
      "forwardDepth": 5.0,
      "backwardDepth": 5.0,
      "codeReference": {
        "fileName": "ozsoft/texasholdem/bots/BasicBot.java",
        "lineStart": 76,
        "lineEnd": 76
      }
    },
    {
      "key": "215_27165",
      "calledGraphId": null,
      "text": "tightness",
      "description": [
        "tightness"
      ],
      "category": "OfActivity",
      "topoIndex": 45.0,
      "forwardDepth": 3.0,
      "backwardDepth": 3.0,
      "codeReference": {
        "fileName": "ozsoft/texasholdem/bots/BasicBot.java",
        "lineStart": 76,
        "lineEnd": 76
      }
    },
    {
      "key": "215_27180",
      "calledGraphId": null,
      "text": "Create a IllegalArgumentException with \"Invalid tightness setting\"",
      "description": [
        "Create a IllegalArgumentException with \"Invalid tightness setting\""
      ],
      "category": "OfActivity",
      "topoIndex": 40.0,
      "forwardDepth": 6.0,
      "backwardDepth": 7.0,
      "codeReference": {
        "fileName": "ozsoft/texasholdem/bots/BasicBot.java",
        "lineStart": 77,
        "lineEnd": 77
      },
      "group": "215_27181"
    },
    {
      "key": "215_27174",
      "calledGraphId": null,
      "text": "IllegalArgumentException",
      "description": [
        "IllegalArgumentException"
      ],
      "category": "OfActivity",
      "topoIndex": 36.0,
      "forwardDepth": 2.0,
      "backwardDepth": 3.0,
      "codeReference": {
        "fileName": "ozsoft/texasholdem/bots/BasicBot.java",
        "lineStart": 77,
        "lineEnd": 77
      },
      "group": "215_27181"
    },
    {
      "key": "215_27177",
      "calledGraphId": null,
      "text": "Create a IllegalArgumentException with \"Invalid tightness setting\"",
      "description": [
        "Create a IllegalArgumentException with \"Invalid tightness setting\""
      ],
      "category": "OfActivity",
      "topoIndex": 38.0,
      "forwardDepth": 4.0,
      "backwardDepth": 5.0,
      "codeReference": {
        "fileName": "ozsoft/texasholdem/bots/BasicBot.java",
        "lineStart": 77,
        "lineEnd": 77
      },
      "group": "215_27181"
    },
    {
      "key": "215_27202",
      "calledGraphId": null,
      "text": "if (aggression is lower than 0) or (aggression is greater than 100)",
      "description": [
        "if (aggression is lower than 0) or (aggression is greater than 100)"
      ],
      "category": "OfCondition",
      "topoIndex": 35.0,
      "forwardDepth": 9.0,
      "backwardDepth": 9.0,
      "codeReference": {
        "fileName": "ozsoft/texasholdem/bots/BasicBot.java",
        "lineStart": 79,
        "lineEnd": 81
      },
      "isGroup": true
    },
    {
      "key": "215_27185",
      "calledGraphId": null,
      "text": "aggression is lower than 0",
      "description": [
        "aggression is lower than 0"
      ],
      "category": "OfActivity",
      "topoIndex": 31.0,
      "forwardDepth": 3.0,
      "backwardDepth": 5.0,
      "codeReference": {
        "fileName": "ozsoft/texasholdem/bots/BasicBot.java",
        "lineStart": 79,
        "lineEnd": 79
      }
    },
    {
      "key": "215_27182",
      "calledGraphId": null,
      "text": "aggression",
      "description": [
        "aggression"
      ],
      "category": "OfActivity",
      "topoIndex": 21.0,
      "forwardDepth": 1.0,
      "backwardDepth": 1.0,
      "codeReference": {
        "fileName": "ozsoft/texasholdem/bots/BasicBot.java",
        "lineStart": 79,
        "lineEnd": 79
      }
    },
    {
      "key": "215_27189",
      "calledGraphId": null,
      "text": "aggression is greater than 100",
      "description": [
        "aggression is greater than 100"
      ],
      "category": "OfActivity",
      "topoIndex": 29.0,
      "forwardDepth": 5.0,
      "backwardDepth": 5.0,
      "codeReference": {
        "fileName": "ozsoft/texasholdem/bots/BasicBot.java",
        "lineStart": 79,
        "lineEnd": 79
      }
    },
    {
      "key": "215_27186",
      "calledGraphId": null,
      "text": "aggression",
      "description": [
        "aggression"
      ],
      "category": "OfActivity",
      "topoIndex": 23.0,
      "forwardDepth": 3.0,
      "backwardDepth": 3.0,
      "codeReference": {
        "fileName": "ozsoft/texasholdem/bots/BasicBot.java",
        "lineStart": 79,
        "lineEnd": 79
      }
    },
    {
      "key": "215_27201", // do not remove 
      "calledGraphId": null,
      "text": "Create a IllegalArgumentException with \"Invalid aggression setting\"",
      "description": [
        "Create a IllegalArgumentException with \"Invalid aggression setting\""
      ],
      "category": "OfActivity",
      "topoIndex": 18.0,
      "forwardDepth": 6.0,
      "backwardDepth": 7.0,
      "codeReference": {
        "fileName": "ozsoft/texasholdem/bots/BasicBot.java",
        "lineStart": 80,
        "lineEnd": 80
      },
      "group": "215_27202"
    },
    {
      "key": "215_27195",
      "calledGraphId": null,
      "text": "IllegalArgumentException",
      "description": [
        "IllegalArgumentException"
      ],
      "category": "OfActivity",
      "topoIndex": 14.0,
      "forwardDepth": 2.0,
      "backwardDepth": 3.0,
      "codeReference": {
        "fileName": "ozsoft/texasholdem/bots/BasicBot.java",
        "lineStart": 80,
        "lineEnd": 80
      },
      "group": "215_27202"
    },
    {
      "key": "215_27198",
      "calledGraphId": null,
      "text": "Create a IllegalArgumentException with \"Invalid aggression setting\"",
      "description": [
        "Create a IllegalArgumentException with \"Invalid aggression setting\""
      ],
      "category": "OfActivity",
      "topoIndex": 16.0,
      "forwardDepth": 4.0,
      "backwardDepth": 5.0,
      "codeReference": {
        "fileName": "ozsoft/texasholdem/bots/BasicBot.java",
        "lineStart": 80,
        "lineEnd": 80
      },
      "group": "215_27202"
    },
    {
      "key": "215_27208",
      "calledGraphId": null,
      "text": "tightness of BasicBot is set to tightness",
      "description": [
        "tightness of BasicBot is set to tightness"
      ],
      "category": "OfActivity",
      "topoIndex": 49.0,
      "forwardDepth": 7.0,
      "backwardDepth": 7.0,
      "codeReference": {
        "fileName": "ozsoft/texasholdem/bots/BasicBot.java",
        "lineStart": 82,
        "lineEnd": 82
      }
    },
    {
      "key": "215_27206",
      "calledGraphId": null,
      "text": "tightness",
      "description": [
        "tightness"
      ],
      "category": "OfActivity",
      "topoIndex": 47.0,
      "forwardDepth": 5.0,
      "backwardDepth": 5.0,
      "codeReference": {
        "fileName": "ozsoft/texasholdem/bots/BasicBot.java",
        "lineStart": 82,
        "lineEnd": 82
      }
    },
    {
      "key": "215_27214",
      "calledGraphId": null,
      "text": "aggression of BasicBot is set to aggression",
      "description": [
        "aggression of BasicBot is set to aggression"
      ],
      "category": "OfActivity",
      "topoIndex": 27.0,
      "forwardDepth": 7.0,
      "backwardDepth": 7.0,
      "codeReference": {
        "fileName": "ozsoft/texasholdem/bots/BasicBot.java",
        "lineStart": 83,
        "lineEnd": 83
      }
    },
    {
      "key": "215_27212",
      "calledGraphId": null,
      "text": "aggression",
      "description": [
        "aggression"
      ],
      "category": "OfActivity",
      "topoIndex": 25.0,
      "forwardDepth": 5.0,
      "backwardDepth": 5.0,
      "codeReference": {
        "fileName": "ozsoft/texasholdem/bots/BasicBot.java",
        "lineStart": 83,
        "lineEnd": 83
      }
    },
    {
      "key": "347_27159_1433",
      "calledGraphId": null,
      "text": "tightness",
      "description": [
        "tightness"
      ],
      "category": "OfInput",
      "topoIndex": 12.0,
      "forwardDepth": 0.0,
      "backwardDepth": 0.0,
      "codeReference": {
        "fileName": "ozsoft/texasholdem/bots/BasicBot.java",
        "lineStart": 75,
        "lineEnd": 75
      }
    },
    {
      "key": "347_27162_1434",
      "calledGraphId": null,
      "text": "0",
      "description": [
        "0"
      ],
      "category": "OfValue",
      "topoIndex": 10.0,
      "forwardDepth": 0.0,
      "backwardDepth": 4.0,
      "codeReference": {
        "fileName": "ozsoft/texasholdem/bots/BasicBot.java",
        "lineStart": 76,
        "lineEnd": 76
      }
    },
    {
      "key": "347_27166_1435",
      "calledGraphId": null,
      "text": "100",
      "description": [
        "100"
      ],
      "category": "OfValue",
      "topoIndex": 9.0,
      "forwardDepth": 0.0,
      "backwardDepth": 4.0,
      "codeReference": {
        "fileName": "ozsoft/texasholdem/bots/BasicBot.java",
        "lineStart": 76,
        "lineEnd": 76
      }
    },
    {
      "key": "347_27174_1436",
      "calledGraphId": null,
      "text": "IllegalArgumentException",
      "description": [
        "IllegalArgumentException"
      ],
      "category": "OfInput",
      "topoIndex": 7.0,
      "forwardDepth": 0.0,
      "backwardDepth": 1.0,
      "codeReference": {
        "fileName": "ozsoft/texasholdem/bots/BasicBot.java",
        "lineStart": 77,
        "lineEnd": 77
      }
    },
    {
      "key": "347_27175_1437",
      "calledGraphId": null,
      "text": "\"Invalid tightness setting\"",
      "description": [
        "\"Invalid tightness setting\""
      ],
      "category": "OfValue",
      "topoIndex": 5.0,
      "forwardDepth": 0.0,
      "backwardDepth": 3.0,
      "codeReference": {
        "fileName": "ozsoft/texasholdem/bots/BasicBot.java",
        "lineStart": 77,
        "lineEnd": 77
      }
    },
    {
      "key": "347_27160_1438",
      "calledGraphId": null,
      "text": "aggression",
      "description": [
        "aggression"
      ],
      "category": "OfInput",
      "topoIndex": 11.0,
      "forwardDepth": 0.0,
      "backwardDepth": 0.0,
      "codeReference": {
        "fileName": "ozsoft/texasholdem/bots/BasicBot.java",
        "lineStart": 75,
        "lineEnd": 75
      }
    },
    {
      "key": "347_27195_1439",
      "calledGraphId": null,
      "text": "IllegalArgumentException",
      "description": [
        "IllegalArgumentException"
      ],
      "category": "OfInput",
      "topoIndex": 3.0,
      "forwardDepth": 0.0,
      "backwardDepth": 1.0,
      "codeReference": {
        "fileName": "ozsoft/texasholdem/bots/BasicBot.java",
        "lineStart": 80,
        "lineEnd": 80
      }
    },
    {
      "key": "347_27196_1440",
      "calledGraphId": null,
      "text": "\"Invalid aggression setting\"",
      "description": [
        "\"Invalid aggression setting\""
      ],
      "category": "OfValue",
      "topoIndex": 1.0,
      "forwardDepth": 0.0,
      "backwardDepth": 3.0,
      "codeReference": {
        "fileName": "ozsoft/texasholdem/bots/BasicBot.java",
        "lineStart": 80,
        "lineEnd": 80
      }
    },
    {
      "key": "347_28163_1441",
      "calledGraphId": null,
      "text": "BasicBot",
      "description": [
        "BasicBot"
      ],
      "category": "OfInput",
      "topoIndex": 0.0,
      "forwardDepth": 0.0,
      "backwardDepth": 6.0,
      "codeReference": {
        "fileName": "UNKNOWN"
      }
    },
    {
      "key": "347_27216_1444",
      "calledGraphId": null,
      "text": "BasicBot",
      "description": [
        "Create a BasicBot AND",
        "aggression of BasicBot is set to aggression AND",
        "tightness of BasicBot is set to tightness"
      ],
      "category": "OfOutput",
      "topoIndex": 51.0,
      "forwardDepth": 9.0,
      "backwardDepth": 9.0,
      "codeReference": {
        "fileName": "ozsoft/texasholdem/bots/BasicBot.java",
        "lineStart": 75,
        "lineEnd": 84
      }
    },
    {
      "key": "347_27159_1445",
      "calledGraphId": null,
      "text": "tightness",
      "description": [
        "tightness"
      ],
      "category": "OfOutput",
      "topoIndex": 44.0,
      "forwardDepth": 2.0,
      "backwardDepth": 2.0,
      "codeReference": {
        "fileName": "ozsoft/texasholdem/bots/BasicBot.java",
        "lineStart": 75,
        "lineEnd": 75
      }
    },
    {
      "key": "347_27164_1446",
      "calledGraphId": null,
      "text": "tightness is lower than 0",
      "description": [
        "tightness is lower than 0"
      ],
      "category": "OfOutput",
      "topoIndex": 55.0,
      "forwardDepth": 4.0,
      "backwardDepth": 6.0,
      "codeReference": {
        "fileName": "ozsoft/texasholdem/bots/BasicBot.java",
        "lineStart": 76,
        "lineEnd": 76
      }
    },
    {
      "key": "347_27159_1447",
      "calledGraphId": null,
      "text": "tightness",
      "description": [
        "tightness"
      ],
      "category": "OfOutput",
      "topoIndex": 46.0,
      "forwardDepth": 4.0,
      "backwardDepth": 4.0,
      "codeReference": {
        "fileName": "ozsoft/texasholdem/bots/BasicBot.java",
        "lineStart": 75,
        "lineEnd": 75
      }
    },
    {
      "key": "347_27168_1448",
      "calledGraphId": null,
      "text": "tightness is greater than 100",
      "description": [
        "tightness is greater than 100"
      ],
      "category": "OfOutput",
      "topoIndex": 53.0,
      "forwardDepth": 6.0,
      "backwardDepth": 6.0,
      "codeReference": {
        "fileName": "ozsoft/texasholdem/bots/BasicBot.java",
        "lineStart": 76,
        "lineEnd": 76
      }
    },
    {
      "key": "347_27170_1449",
      "calledGraphId": null,
      "text": " (tightness is lower than 0) or (tightness is greater than 100)",
      "description": [
        "(tightness is lower than 0) or (tightness is greater than 100)"
      ],
      "category": "OfOutput",
      "topoIndex": 57.0,
      "forwardDepth": 8.0,
      "backwardDepth": 8.0,
      "codeReference": {
        "fileName": "ozsoft/texasholdem/bots/BasicBot.java",
        "lineStart": 76,
        "lineEnd": 76
      }
    },
    {
      "key": "347_27160_1450",
      "calledGraphId": null,
      "text": "aggression",
      "description": [
        "aggression"
      ],
      "category": "OfOutput",
      "topoIndex": 22.0,
      "forwardDepth": 2.0,
      "backwardDepth": 2.0,
      "codeReference": {
        "fileName": "ozsoft/texasholdem/bots/BasicBot.java",
        "lineStart": 75,
        "lineEnd": 75
      }
    },
    {
      "key": "347_27185_1451", // here
      "calledGraphId": null,
      "text": "aggression is lower than 0",
      "description": [
        "aggression is lower than 0"
      ],
      "category": "OfOutput",
      "topoIndex": 32.0,
      "forwardDepth": 4.0,
      "backwardDepth": 6.0,
      "codeReference": {
        "fileName": "ozsoft/texasholdem/bots/BasicBot.java",
        "lineStart": 79,
        "lineEnd": 79
      }
    },
    {
      "key": "347_27160_1452",
      "calledGraphId": null,
      "text": "aggression",
      "description": [
        "aggression"
      ],
      "category": "OfOutput",
      "topoIndex": 24.0,
      "forwardDepth": 4.0,
      "backwardDepth": 4.0,
      "codeReference": {
        "fileName": "ozsoft/texasholdem/bots/BasicBot.java",
        "lineStart": 75,
        "lineEnd": 75
      }
    },
    {
      "key": "347_27189_1453",
      "calledGraphId": null,
      "text": "aggression is greater than 100",
      "description": [
        "aggression is greater than 100"
      ],
      "category": "OfOutput",
      "topoIndex": 30.0,
      "forwardDepth": 6.0,
      "backwardDepth": 6.0,
      "codeReference": {
        "fileName": "ozsoft/texasholdem/bots/BasicBot.java",
        "lineStart": 79,
        "lineEnd": 79
      }
    },
    {
      "key": "347_27191_1454", // to point to this
      "calledGraphId": null,
      "text": "(aggression is lower than 0) or (aggression is greater than 100)",
      "description": [
        "(aggression is lower than 0) or (aggression is greater than 100)"
      ],
      "category": "OfOutput",
      "topoIndex": 34.0,
      "forwardDepth": 8.0,
      "backwardDepth": 8.0,
      "codeReference": {
        "fileName": "ozsoft/texasholdem/bots/BasicBot.java",
        "lineStart": 79,
        "lineEnd": 79
      }
    },
    {
      "key": "347_27159_1455",
      "calledGraphId": null,
      "text": "tightness",
      "description": [
        "tightness"
      ],
      "category": "OfOutput",
      "topoIndex": 48.0,
      "forwardDepth": 6.0,
      "backwardDepth": 6.0,
      "codeReference": {
        "fileName": "ozsoft/texasholdem/bots/BasicBot.java",
        "lineStart": 75,
        "lineEnd": 75
      }
    },
    {
      "key": "347_27141_1456",
      "calledGraphId": null,
      "text": "tightness of BasicBot is set to tightness",
      "description": [
        "tightness of BasicBot is set to tightness"
      ],
      "category": "OfOutput",
      "topoIndex": 50.0,
      "forwardDepth": 8.0,
      "backwardDepth": 8.0,
      "codeReference": {
        "fileName": "ozsoft/texasholdem/bots/BasicBot.java",
        "lineStart": 55,
        "lineEnd": 55
      }
    },
    {
      "key": "347_27160_1457",
      "calledGraphId": null,
      "text": "aggression",
      "description": [
        "aggression"
      ],
      "category": "OfOutput",
      "topoIndex": 26.0,
      "forwardDepth": 6.0,
      "backwardDepth": 6.0,
      "codeReference": {
        "fileName": "ozsoft/texasholdem/bots/BasicBot.java",
        "lineStart": 75,
        "lineEnd": 75
      }
    },
    {
      "key": "347_27145_1458",
      "calledGraphId": null,
      "text": "aggression of BasicBot is set to aggression",
      "description": [
        "aggression of BasicBot is set to aggression"
      ],
      "category": "OfOutput",
      "topoIndex": 28.0,
      "forwardDepth": 8.0,
      "backwardDepth": 8.0,
      "codeReference": {
        "fileName": "ozsoft/texasholdem/bots/BasicBot.java",
        "lineStart": 58,
        "lineEnd": 58
      }
    },
    {
      "key": "347_27195_1459",
      "calledGraphId": null,
      "text": "IllegalArgumentException",
      "description": [
        "IllegalArgumentException"
      ],
      "category": "OfOutput",
      "topoIndex": 15.0,
      "forwardDepth": 3.0,
      "backwardDepth": 4.0,
      "codeReference": {
        "fileName": "ozsoft/texasholdem/bots/BasicBot.java",
        "lineStart": 80,
        "lineEnd": 80
      },
      "group": "215_27202"
    },
    {
      "key": "347_27198_1460",
      "calledGraphId": null,
      "text": "Create a IllegalArgumentException with \"Invalid aggression setting\"",
      "description": [
        "Create a IllegalArgumentException with \"Invalid aggression setting\""
      ],
      "category": "OfOutput",
      "topoIndex": 17.0,
      "forwardDepth": 5.0,
      "backwardDepth": 6.0,
      "codeReference": {
        "fileName": "ozsoft/texasholdem/bots/BasicBot.java",
        "lineStart": 80,
        "lineEnd": 80
      },
      "group": "215_27202"
    },
    {
      "key": "347_27174_1462",
      "calledGraphId": null,
      "text": "IllegalArgumentException",
      "description": [
        "IllegalArgumentException"
      ],
      "category": "OfOutput",
      "topoIndex": 37.0,
      "forwardDepth": 3.0,
      "backwardDepth": 4.0,
      "codeReference": {
        "fileName": "ozsoft/texasholdem/bots/BasicBot.java",
        "lineStart": 77,
        "lineEnd": 77
      },
      "group": "215_27181"
    },
    {
      "key": "347_27177_1463",
      "calledGraphId": null,
      "text": "Create a IllegalArgumentException with \"Invalid tightness setting\"",
      "description": [
        "Create a IllegalArgumentException with \"Invalid tightness setting\""
      ],
      "category": "OfOutput",
      "topoIndex": 39.0,
      "forwardDepth": 5.0,
      "backwardDepth": 6.0,
      "codeReference": {
        "fileName": "ozsoft/texasholdem/bots/BasicBot.java",
        "lineStart": 77,
        "lineEnd": 77
      },
      "group": "215_27181"
    },
    {
      "key": "347_27174_1436_215_27181",
      "calledGraphId": null,
      "text": "IllegalArgumentException",
      "description": [
        "IllegalArgumentException"
      ],
      "category": "OfInput",
      "topoIndex": 8.0,
      "forwardDepth": 1.0,
      "backwardDepth": 2.0,
      "codeReference": {
        "fileName": "ozsoft/texasholdem/bots/BasicBot.java",
        "lineStart": 77,
        "lineEnd": 77
      },
      "group": "215_27181"
    },
    {
      "key": "347_27195_1439_215_27202",
      "calledGraphId": null,
      "text": "IllegalArgumentException",
      "description": [
        "IllegalArgumentException"
      ],
      "category": "OfInput",
      "topoIndex": 4.0,
      "forwardDepth": 1.0,
      "backwardDepth": 2.0,
      "codeReference": {
        "fileName": "ozsoft/texasholdem/bots/BasicBot.java",
        "lineStart": 80,
        "lineEnd": 80
      },
      "group": "215_27202"
    },
    {
      "key": "347_27196_1440_215_27202",
      "calledGraphId": null,
      "text": "\"Invalid aggression setting\"",
      "description": [
        "\"Invalid aggression setting\""
      ],
      "category": "OfValue",
      "topoIndex": 2.0,
      "forwardDepth": 1.0,
      "backwardDepth": 4.0,
      "codeReference": {
        "fileName": "ozsoft/texasholdem/bots/BasicBot.java",
        "lineStart": 80,
        "lineEnd": 80
      },
      "group": "215_27202"
    },
    {
      "key": "347_27201_1461_215_27202",
      "calledGraphId": null,
      "text": "Create a IllegalArgumentException with \"Invalid aggression setting\"",
      "description": [
        "Create a IllegalArgumentException with \"Invalid aggression setting\""
      ],
      "category": "OfOutput",
      "topoIndex": 19.0,
      "forwardDepth": 7.0,
      "backwardDepth": 8.0,
      "codeReference": {
        "fileName": "ozsoft/texasholdem/bots/BasicBot.java",
        "lineStart": 80,
        "lineEnd": 80
      },
      "group": "215_27202"
    },
    {
      "key": "347_27175_1437_215_27181",
      "calledGraphId": null,
      "text": "\"Invalid tightness setting\"",
      "description": [
        "\"Invalid tightness setting\""
      ],
      "category": "OfValue",
      "topoIndex": 6.0,
      "forwardDepth": 1.0,
      "backwardDepth": 4.0,
      "codeReference": {
        "fileName": "ozsoft/texasholdem/bots/BasicBot.java",
        "lineStart": 77,
        "lineEnd": 77
      },
      "group": "215_27181"
    },

  ],
  "linkList": [
    {
      "from": {
        "nodeIdInCurrentGraph": "215_27216"
      },
      "to": {
        "nodeIdInCurrentGraph": "347_27216_1444"
      }
    },
    {
      "from": {
        "nodeIdInCurrentGraph": "347_27170_1449"
      },
      "to": {
        "nodeIdInCurrentGraph": "215_27181"
      }
    },
    {
      "from": {
        "nodeIdInCurrentGraph": "347_27164_1446"
      },
      "to": {
        "nodeIdInCurrentGraph": "347_27170_1449"
      }
    },
    {
      "from": {
        "nodeIdInCurrentGraph": "347_27168_1448"
      },
      "to": {
        "nodeIdInCurrentGraph": "347_27170_1449"
      }
    },
    {
      "from": {
        "nodeIdInCurrentGraph": "215_27164"
      },
      "to": {
        "nodeIdInCurrentGraph": "347_27164_1446"
      }
    },
    {
      "from": {
        "nodeIdInCurrentGraph": "347_27162_1434"
      },
      "to": {
        "nodeIdInCurrentGraph": "215_27164"
      }
    },
    {
      "from": {
        "nodeIdInCurrentGraph": "347_27159_1445"
      },
      "to": {
        "nodeIdInCurrentGraph": "215_27164"
      }
    },
    {
      "from": {
        "nodeIdInCurrentGraph": "215_27161"
      },
      "to": {
        "nodeIdInCurrentGraph": "347_27159_1445"
      }
    },
    {
      "from": {
        "nodeIdInCurrentGraph": "347_27159_1433"
      },
      "to": {
        "nodeIdInCurrentGraph": "215_27161"
      }
    },
    {
      "from": {
        "nodeIdInCurrentGraph": "215_27168"
      },
      "to": {
        "nodeIdInCurrentGraph": "347_27168_1448"
      }
    },
    {
      "from": {
        "nodeIdInCurrentGraph": "347_27166_1435"
      },
      "to": {
        "nodeIdInCurrentGraph": "215_27168"
      }
    },
    {
      "from": {
        "nodeIdInCurrentGraph": "347_27159_1447"
      },
      "to": {
        "nodeIdInCurrentGraph": "215_27168"
      }
    },
    {
      "from": {
        "nodeIdInCurrentGraph": "215_27165"
      },
      "to": {
        "nodeIdInCurrentGraph": "347_27159_1447"
      }
    },
    {
      "from": {
        "nodeIdInCurrentGraph": "347_27159_1445"
      },
      "to": {
        "nodeIdInCurrentGraph": "215_27165"
      }
    },
    {
      "from": {
        "nodeIdInCurrentGraph": "347_27177_1463"
      },
      "to": {
        "nodeIdInCurrentGraph": "215_27180"
      }
    },
    {
      "from": {
        "nodeIdInCurrentGraph": "215_27174"
      },
      "to": {
        "nodeIdInCurrentGraph": "347_27174_1462"
      }
    },
    {
      "from": {
        "nodeIdInCurrentGraph": "347_27174_1436_215_27181"
      },
      "to": {
        "nodeIdInCurrentGraph": "215_27174"
      }
    },
    {
      "from": {
        "nodeIdInCurrentGraph": "215_27177"
      },
      "to": {
        "nodeIdInCurrentGraph": "347_27177_1463"
      }
    },
    {
      "from": {
        "nodeIdInCurrentGraph": "347_27174_1462"
      },
      "to": {
        "nodeIdInCurrentGraph": "215_27177"
      }
    },
    {
      "from": {
        "nodeIdInCurrentGraph": "347_27175_1437_215_27181"
      },
      "to": {
        "nodeIdInCurrentGraph": "215_27177"
      }
    },
    {
      "from": {
        "nodeIdInCurrentGraph": "347_27191_1454"
      },
      "to": {
        "nodeIdInCurrentGraph": "215_27202"
      }
    },
    {
      "from": {
        "nodeIdInCurrentGraph": ""
      },
      "to": {
        "nodeIdInCurrentGraph": "347_27191_1454"
      }
    },
    {
      "from": {
        "nodeIdInCurrentGraph": "347_27185_1451"
      },
      "to": {
        "nodeIdInCurrentGraph": "347_27191_1454"
      }
    },
    {
      "from": {
        "nodeIdInCurrentGraph": "347_27189_1453"
      },
      "to": {
        "nodeIdInCurrentGraph": "347_27191_1454"
      }
    },
    {
      "from": {
        "nodeIdInCurrentGraph": "215_27185"
      },
      "to": {
        "nodeIdInCurrentGraph": "347_27185_1451"
      }
    },
    {
      "from": {
        "nodeIdInCurrentGraph": "347_27162_1434"
      },
      "to": {
        "nodeIdInCurrentGraph": "215_27185"
      }
    },
    {
      "from": {
        "nodeIdInCurrentGraph": "347_27160_1450"
      },
      "to": {
        "nodeIdInCurrentGraph": "215_27185"
      }
    },
    {
      "from": {
        "nodeIdInCurrentGraph": "215_27182"
      },
      "to": {
        "nodeIdInCurrentGraph": "347_27160_1450"
      }
    },
    {
      "from": {
        "nodeIdInCurrentGraph": "347_27160_1438"
      },
      "to": {
        "nodeIdInCurrentGraph": "215_27182"
      }
    },
    {
      "from": {
        "nodeIdInCurrentGraph": "215_27189"
      },
      "to": {
        "nodeIdInCurrentGraph": "347_27189_1453"
      }
    },
    {
      "from": {
        "nodeIdInCurrentGraph": "347_27166_1435"
      },
      "to": {
        "nodeIdInCurrentGraph": "215_27189"
      }
    },
    {
      "from": {
        "nodeIdInCurrentGraph": "347_27160_1452"
      },
      "to": {
        "nodeIdInCurrentGraph": "215_27189"
      }
    },
    {
      "from": {
        "nodeIdInCurrentGraph": "215_27186"
      },
      "to": {
        "nodeIdInCurrentGraph": "347_27160_1452"
      }
    },
    {
      "from": {
        "nodeIdInCurrentGraph": "347_27160_1450"
      },
      "to": {
        "nodeIdInCurrentGraph": "215_27186"
      }
    },
    {
      "from": {
        "nodeIdInCurrentGraph": "215_27201"
      },
      "to": {
        "nodeIdInCurrentGraph": "347_27201_1461_215_27202"
      }
    },
    {
      "from": {
        "nodeIdInCurrentGraph": "347_27198_1460"
      },
      "to": {
        "nodeIdInCurrentGraph": "215_27201"
      }
    },
    {
      "from": {
        "nodeIdInCurrentGraph": "215_27195"
      },
      "to": {
        "nodeIdInCurrentGraph": "347_27195_1459"
      }
    },
    {
      "from": {
        "nodeIdInCurrentGraph": "347_27195_1439_215_27202"
      },
      "to": {
        "nodeIdInCurrentGraph": "215_27195"
      }
    },
    {
      "from": {
        "nodeIdInCurrentGraph": "215_27198"
      },
      "to": {
        "nodeIdInCurrentGraph": "347_27198_1460"
      }
    },
    {
      "from": {
        "nodeIdInCurrentGraph": "347_27195_1459"
      },
      "to": {
        "nodeIdInCurrentGraph": "215_27198"
      }
    },
    {
      "from": {
        "nodeIdInCurrentGraph": "347_27196_1440_215_27202"
      },
      "to": {
        "nodeIdInCurrentGraph": "215_27198"
      }
    },
    {
      "from": {
        "nodeIdInCurrentGraph": "215_27208"
      },
      "to": {
        "nodeIdInCurrentGraph": "347_27141_1456"
      }
    },
    {
      "from": {
        "nodeIdInCurrentGraph": "347_28163_1441"
      },
      "to": {
        "nodeIdInCurrentGraph": "215_27208"
      }
    },
    {
      "from": {
        "nodeIdInCurrentGraph": "347_27159_1455"
      },
      "to": {
        "nodeIdInCurrentGraph": "215_27208"
      }
    },
    {
      "from": {
        "nodeIdInCurrentGraph": "215_27206"
      },
      "to": {
        "nodeIdInCurrentGraph": "347_27159_1455"
      }
    },
    {
      "from": {
        "nodeIdInCurrentGraph": "347_27159_1447"
      },
      "to": {
        "nodeIdInCurrentGraph": "215_27206"
      }
    },
    {
      "from": {
        "nodeIdInCurrentGraph": "215_27214"
      },
      "to": {
        "nodeIdInCurrentGraph": "347_27145_1458"
      }
    },
    {
      "from": {
        "nodeIdInCurrentGraph": "347_28163_1441"
      },
      "to": {
        "nodeIdInCurrentGraph": "215_27214"
      }
    },
    {
      "from": {
        "nodeIdInCurrentGraph": "347_27160_1457"
      },
      "to": {
        "nodeIdInCurrentGraph": "215_27214"
      }
    },
    {
      "from": {
        "nodeIdInCurrentGraph": "215_27212"
      },
      "to": {
        "nodeIdInCurrentGraph": "347_27160_1457"
      }
    },
    {
      "from": {
        "nodeIdInCurrentGraph": "347_27160_1452"
      },
      "to": {
        "nodeIdInCurrentGraph": "215_27212"
      }
    },
    {
      "from": {
        "nodeIdInCurrentGraph": "347_27174_1436"
      },
      "to": {
        "nodeIdInCurrentGraph": "347_27174_1436_215_27181"
      }
    },
    {
      "from": {
        "nodeIdInCurrentGraph": "347_27175_1437"
      },
      "to": {
        "nodeIdInCurrentGraph": "347_27175_1437_215_27181"
      }
    },
    {
      "from": {
        "nodeIdInCurrentGraph": "347_27195_1439"
      },
      "to": {
        "nodeIdInCurrentGraph": "347_27195_1439_215_27202"
      }
    },
    {
      "from": {
        "nodeIdInCurrentGraph": "347_27196_1440"
      },
      "to": {
        "nodeIdInCurrentGraph": "347_27196_1440_215_27202"
      }
    },
    {
      "from": {
        "nodeIdInCurrentGraph": "347_27141_1456"
      },
      "to": {
        "nodeIdInCurrentGraph": "347_27216_1444"
      }
    },
    {
      "from": {
        "nodeIdInCurrentGraph": "347_27145_1458"
      },
      "to": {
        "nodeIdInCurrentGraph": "347_27216_1444"
      }
    },
  ],
  "meta": {
    "methodName": "org.ozsoft.texasholdem.bots.BasicBot.BasicBot(int, int) [Public]",
    "codeReference": {
      "fileName": "ozsoft/texasholdem/bots/BasicBot.java",
      "lineStart": 75,
      "lineEnd": 84
    },
    "title": "Flow of a Basic Bot"
  }
};

var manynodes=[];
var manylinks=[];
var actLinks=[];



for(var i=0; i< data.nodeList.length; i++){
    console.log( data.nodeList[i] );
 /*   var node1 =
    $(go.Node, "Auto",
      $(go.Shape,
        { figure: "RoundedRectangle",
          fill: "green" }),
      $(go.TextBlock,
        { text: data.nodeList[i].key,
          margin: 5 })
    )*/

    //manynodes.push(node1);
    //myDiagram.add(node1);


    //if(data.nodeList[i].category!= "OfActivity"){
    var path1="icons/act.png";
    //console.log("path ", data.nodeList[i].category );
    if( data.nodeList[i].category == "OfInput"){path1="icons/input.png";}else if(data.nodeList[i].category== "OfOutput"){path1="icons/output.png"}else if(data.nodeList[i].category== " OfCondition"){path1="icons/cond.png";}

    var node1={key:data.nodeList[i].key , text: data.nodeList[i].text, number:data.nodeList[i].topoIndex, icon:"icons/act.png",  color: "green", ind0:"red", ind1:"orange", ind2:"mediumspringgreen", isGroup: data.nodeList[i].isGroup, group:data.nodeList[i].group, path: path1, };
    manynodes.push(node1);
    //}

     if(data.nodeList[i].category== "OfActivity"){actLinks.push( node1); }
    //myDiagram.add( node1);



  }//eof for

  for(var i=0; i< data.linkList.length; i++){
    //console.log( data.linkList[i] );
    var link1={from: data.linkList[i].from.nodeIdInCurrentGraph  , to:data.linkList[i].to.nodeIdInCurrentGraph };
    manylinks.push(link1)
  }//eof for


/*for(var i=0; i< data.linkList.length;i++){
  for(var j=0 j< actLinks.length; j++){

    var regNode= data.nodeList[i];
    var actNode=actLinks[j];

      if(  regNode.to.nodeIdInCurrentGraph === actNode  )

  }
}//eof outter loop

*/



myDiagram.model = new go.GraphLinksModel(
    manynodes,
    manylinks);


/*setTimeout( function(){
myDiagram.nodes.each(function(node){ 
  if(node.data.text.length<9){
     node.location=node.location.copy().offset(100,100);
    //myDiagram.model.setDataProperty(node.data, "location", node.location.copy.offset(100,100));
  

  }


});

}, 2000)//eof timout*/
  //console.log(manynodes);
  //console.log(manylinks);
  /*myDiagram.nodeList=manynodes;
  myDiagram.linkList=manylinks;*/

});//eof jquery
