var fs = require('fs');

try 
{
    var { minify } = require('csso');
}
catch(err)
{
    console.log('module csso not found. npm i -D csso')
}


if(fs.existsSync(__dirname + '/src'))
{
    var src = fs.readdirSync(__dirname + '/src');

    var Out = '';

    src.forEach((file) => {
        Out += fs.readFileSync(__dirname + '/src/' + file, 'utf-8');
    })

    fs.writeFileSync(__dirname + '/dist/stylekit.css', Out);
    console.log('Build dev success!')

    if(minify)
    {
        fs.writeFileSync(__dirname + '/dist/stylekit.min.css', minify(Out).css);
        console.log('Build min success!')
    }
        

    
}
else 
{
    console.log('Directory not found');
}
