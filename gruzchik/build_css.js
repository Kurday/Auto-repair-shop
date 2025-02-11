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
    var src_custom = fs.readdirSync(__dirname + '/src_custom');

    var Out = '';

    src.forEach((file) => {
        Out += fs.readFileSync(__dirname + '/src/' + file, 'utf-8');
    })

    src_custom.forEach((file) => {
        Out += fs.readFileSync(__dirname + '/src_custom/' + file, 'utf-8');
    })

    if(!fs.existsSync(__dirname + '/build_css'))
    {
        fs.mkdirSync(__dirname + '/build_css');
    }

    fs.writeFileSync(__dirname + '/build_css/style.css', Out);
    console.log('Build dev success!')

    if(minify)
    {
        fs.writeFileSync(__dirname + '/build_css/style.min.css', minify(Out).css);
        console.log('Build min success!')
    }
        
}
else 
{
    console.log('Directory not found');
}
