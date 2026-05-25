console.log("if-else Conditional Statement")
let launchBrowser= "Chrome"
if(launchBrowser === "Chrome")
{
    console.log(`${launchBrowser} browser`)
}else if (launchBrowser === "MSEdge")
{
    console.log(`${launchBrowser} browser`)
}else
{
    console.log("Invalid browser name")
}

//----------------------------------------------

console.log("Switchcase Conditional Statement")
let runtest= "sanity"
switch(runtest)
{
    case "sanity":
        console.log(`Perform ${runtest} testing`)
    break;

    case "smoke":
        console.log(`Perform ${runtest} testing`)
    break;

    case "regression":
        console.log(`Perform ${runtest} testing`)
    break;

    default:
        console.log ("Perform sanity testing")
    break;
}