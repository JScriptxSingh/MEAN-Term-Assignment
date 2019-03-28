import app from "./app";

const PORT = 5000;

app.listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
})

app.set('views','./views');
app.set('view engine', 'pug');