module.exports = function(pathfromUrl) {
     if (pathfromUrl.startsWith('~')) {
          pathfromUrl = changetoNormal(pathfromUrl);
     }

     const oldRoute = "/" + pathfromUrl;
     const newRoute = oldRoute.replace(/-/g, '/');
     return newRoute
}

function changetoNormal(path) {
     path = path.replace('~', '');
     path = "Users-username" + path
     console.log(`The new path is ${path}`);
     return path
}