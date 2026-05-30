console.log("if-else Conditional Statement")
let browserName = "Chrome"
function launchBrowser(browserName)
{
if(browserName === "Chrome")
{
    console.log(`${browserName} browser`)
}else if (browserName === "MSEdge")
{
    console.log(`${browserName} browser`)
}else
{
    console.log("Invalid browser name")
}
}
launchBrowser(browserName)


//----------------------------------------------

console.log("Switchcase Conditional Statement")
let testType= "sanity"
function runtest(testType)
{
switch(testType)
{
    case "sanity":
        console.log(`Perform ${testType} testing`)
    break;

    case "smoke":
        console.log(`Perform ${testType} testing`)
    break;

    case "regression":
        console.log(`Perform ${testType} testing`)
    break;

    default:
        console.log ("Perform sanity testing")
    break;
}
}
runtest(testType)
