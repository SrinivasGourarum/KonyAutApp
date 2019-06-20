var userReporter = {
   jasmineStarted: function(suiteInfo) {
       kony.print('Running suite with total specs ' + suiteInfo.totalSpecsDefined);
   },
   
   suiteStarted: function(result) {
       kony.print('Test Suite: ' + result.description);
   },
   
   specStarted:function (result) {
       kony.print('Spec started: ' + result.description + ' whose full description is: ' + result.fullName);
   },
   
   specDone: function(result) {
       kony.print('Spec: ' + result.description + ' Execution status: ' + result.status);
       for(var i = 0; i < result.failedExpectations.length; i++) {
           kony.print('Failure: ' + result.failedExpectations[i].message + ' at ' + result.failedExpectations[i].stack);
       }
       kony.print('Spec: ' + result.description + 'Total passed expectations: ' + result.passedExpectations.length);
   },

   suiteDone: function(result) {
       kony.print('Suite: ' + result.description + ' was ' + result.status);
       for(var i = 0; i < result.failedExpectations.length; i++) {
            kony.print('Failure: ' + result.failedExpectations[i].message + ' at ' + result.failedExpectations[i].stack);
       }
   },

   jasmineDone: function() {
       kony.print('Finished suite');
   }
};

var jasmineResults = {
        'messageType': 'jasmineEvent',
        'messageData': {
            'DeviceID': 'web'
        }
    };

    var baseTemplate = `<!DOCTYPE html>
    <html>
    <head>
        <title>Jasmine Report</title>
        <style type="text/css">
            .header {
                height: 3.500em;
                align-items: center;
                display: flex;
                padding: 0 1em;
            }
            .passed {
                background: rgb(76, 175, 80, 1);
            }
            .failed {
                background: rgb(255, 87, 34, 1);
            }
            .pending {
                background: rgb(230, 224, 42);
            }
            .font-white {
                color: white;
            }
            .flex {
                -webkit-flex: 1;
                -ms-flex: 1;
                flex: 1;
            }
            .relative {
                position: relative;
            }
            body {
                font-family: Roboto,Helvetica Neue,sans-serif;
                letter-spacing: .005em;
                margin: 0px;
            }
            .ellipsis {
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
            .inherit-font  {
                font-weight: inherit;
            }
            .section-passed {
                border-width: 0.250em;
                background: rgb(206, 250, 209);
                border-color: transparent;
                border-style: solid;
                padding: 0.313em;
            }
            .section-failed {
                border-width: 0.250em;
                background: rgba(255, 87, 34, 0.47);
                border-color: transparent;
                border-style: solid;
                padding: 0.313em;
            }
            .section-pending {
                border-width: 0.250em;
                background: rgb(230, 224, 42, 0.47);;
                border-color: transparent;
                border-style: solid;
                padding: 0.313em;
            }
            .section-header {
                height: 3.13em;
                line-height: 3.13em;
                text-align: center;
                border-radius: 0.313em 0.313em 0em 0em;
            }
            .status {
                height: 3.13em;
                line-height: 3.13em;
                text-align: center;
                border-radius: 0.313em;
            }
            .vertical-center {
                display: inline-block;
                vertical-align: middle;
            }
            .divider {
                border-width: 0.125em 0em 0em 0em;
                border-style: solid;
                border-color: rgba(0, 0, 0, 0.43);
            }
            .content {
                display: flex;
                padding: 0.313em 0.313em 0em 0.313em;
                cursor: pointer;
                background: white;
            }
            .content:hover {
                background: rgba(147, 126, 126, 0.6);
            }

            .description {
                min-height:2.250em;
                overflow: hidden;
                white-space: normal;
                word-break: break-word;
            }

            .font-black {
                color: black;
                margin: 0.5em 1.125em;
                font-size: small;
            }

            .display-flex {
                display: flex;
            }
            .row-seperator {
                border-width: 0em 0em 0.125em 0em;
                border-style: solid;
                border-color: rgb(235, 229, 229);
                padding: 0.313em 0em 0.5em 0em;
            }
            .duration {
                background: rgb(120, 92, 92);
                font-size: small;
                border-radius: 0;
            }
            .spec-id {
                font-size: large;
            }
        </style>
    </head>
    <body>
        <div class="header {{status}} relative flex font-white">
            <h3 class="ellipsis flex inherit-font">Results</h3>
            <h6>
                <span>Passed: {{passedCount}}</span><br/>
                <span>Failed: {{failedCount}}</span><br/>
                <span>Pending: {{pendingCount}}</span>
            </h6>
        </div>
        {%{suites}%}
    </body>
    </html>`;

   var suiteHTML = `<div class="divider">
            <div class="section-{{status}} relative">
                <div class="section-header {{status}}">
                    <span class="vertical-center font-white ellipsis" style="width:inherit;">Suite description: {{description}}</span>
                </div>
                {%{specs}%}
            </div>
        </div>`;

    var specHTML = `<div class="content">
                    <div class="relative display-flex row-seperator" style="width:100%;">
                        <div class="status {{status}} vertical-center font-white ellipsis flex" style="max-width:5.5em;">{{status}}</div>
                        <div class="font-black flex description vertical-center" style="min-width: 50%">
                            <div class="spec-id">spec description: {{description}} </div>
                            <div><br/>FailedExpectations:<br/><br/>{%{failedExpectations}%}</div>
                        </div>
                        <div class="status duration ellipsis flex font-white vertical-center" style="max-width:5.5em;">{{duration}}</div>
                    </div>
                </div>`;

    var expectations = `Message: {{message}}<br/>Stack: {{stack}}<br/><br/>`;

    var templatingEngine = {
        suites: function(suites) {
            var suitesTemplate = '', suitesCount = suites.length,
            index;

            for(index = 0; index < suitesCount; index++) {
                suitesTemplate += templatingEngine.parseHTML(suites[index], suiteHTML);
            }
            return suitesTemplate;
        },
        specs: function(specs) {
            var specsTemplate = '', specsCount = specs.length,
            index;

            for(index = 0; index < specsCount; index++) {
                specsTemplate += templatingEngine.parseHTML(specs[index], specHTML);
            }
            return specsTemplate;
        },
        failedExpectations: function(failedExpectations) {
            var expectationTemplate = "", expectationsLength = failedExpectations.length,
            index;

            for(index = 0; index < expectationsLength; index++) {
                expectationTemplate += templatingEngine.parseHTML(failedExpectations[index], expectations);
            }

            if(!expectationTemplate.length) {
                expectationTemplate = 'None';
            }
            return expectationTemplate;
        },
        parseHTML: function(data, template) {
            //direct substitute
            var match, regex = /{{[a-zA-Z]*}}/gm, key, subtemplate;

            do {
                match = regex.exec(template);
                regex.lastIndex = 0;
                if(match) {
                    match = match[0];
                    key = match.substr(2, match.length - 4);
                    template = template.split(match).join(data[key]);
                }
            } while(match);

            //sub-parser
            regex = /{%{[a-zA-Z.]*}%}/gm;
            do {
                match = regex.exec(template);
                regex.lastIndex = 0;
                if(match) {
                    match = match[0];
                    key = match.substr(3, match.length - 6);
                    subtemplate = templatingEngine[key](data[key]);
                    template = template.split(match).join(subtemplate);
                }
            } while(match);


            return template;
        }
    };

    var reportingInput = {};

    var specStartDurations = {};

    var defaultReporter = {
        jasmineStarted: function(suiteInfo) {
            reportingInput = {
                status: '',
                passedCount: 0,
                failedCount: 0,
                pendingCount: 0,
                suites: []
            };
        },
        suiteStarted: function(result) {
            reportingInput.suites.push({
                'description': result.description,
                'specs': []
            });
        },
        specStarted:function (result) {
            specStartDurations[result.id] = (new Date()).toISOString();

        },
        specDone: function(result) {
            var failure, passed, i, spec = {
                'failedExpectations': []
            };

            // suspectLine
            for(i = 0; i < result.failedExpectations.length; i++) {

                failure = result.failedExpectations[i];
                spec.failedExpectations.push({
                    'message': failure.message,
                    'stack': failure.stack
                });
            }
            spec.status = result.status;
            spec.description = result.description;
            spec.duration = new Date((new Date()).toISOString()) - new Date(specStartDurations[result.id]) + ' ms';
            reportingInput.suites[reportingInput.suites.length - 1].specs.push(spec);
        },

        suiteDone: function(result) {
            var suite = reportingInput.suites[reportingInput.suites.length - 1],
            spec = suite.specs, i, suiteStatus = 'passed';

            for(i = 0; i < spec.length; i++) {
                if(spec[i].status === 'failed') {
                    suiteStatus = 'failed';
                    break;
                } else if(spec[i].status === 'pending') {
                    suiteStatus = 'pending';
                    break;
                }
            }
            suite.status = suiteStatus;
        },
        jasmineDone: function(result) {
            //replace Variables in html
            var suite = reportingInput.suites, i, jasmineStatus = 'passed', passedCount = 0,
            failedCount = 0, pendingCount = 0;

            for(i = 0; i < suite.length; i++) {
                if(suite[i].status === 'failed') {
                    if(jasmineStatus === 'passed') {
                        jasmineStatus = 'failed';
                    }
                    failedCount++;
                } else if(suite[i].status === 'pending') {
                    if(jasmineStatus === 'passed') {
                        jasmineStatus = 'pending';
                    }
                    pendingCount++;
                } else {
                    passedCount++;
                }
            }
            reportingInput.status = jasmineStatus;
            reportingInput.pendingCount = pendingCount;
            reportingInput.failedCount = failedCount;
            reportingInput.passedCount = passedCount;

            var reporterHTML = templatingEngine.parseHTML(reportingInput, baseTemplate);
            var blob = new Blob([reporterHTML], {type: 'text/plain'}),
            e = document.createEvent('MouseEvents'),
            a = document.createElement('a');

            a.download = 'report.html'
            a.href = window.URL.createObjectURL(blob);
            a.dataset.downloadurl =  ['text/html', a.download, a.href].join(':')
            e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
            a.dispatchEvent(e);

        }
    };

jasmine.getEnv().addReporter(defaultReporter);