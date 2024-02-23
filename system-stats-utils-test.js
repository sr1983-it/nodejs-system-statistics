
import {getSystemStats} from "./system-stats-utils.js";

async function testServerStats() {

    const serverStats = await getSystemStats();
    console.log(serverStats);
    
}

testServerStats();