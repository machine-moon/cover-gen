const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.use(express.static('public'));
app.use(express.json());

app.get('/files', (req, res) => {
    fs.readdir(path.join(__dirname, 'src'), (err, files) => {  // Change 'files' to 'src'
        if (err) {
            res.status(500).send('Error reading files');
        } else {
            res.json(files);
        }
    });
});

app.get('/file', (req, res) => {
    const filePath = path.join(__dirname, 'src', req.query.fileName); // Change 'files' to 'src'
    const data = fs.readFileSync(filePath, 'utf8');
    res.send(data);
});



app.post('/replace', (req, res) => {
    const { fileName, originalText, replacementText } = req.body;
    let { newFileName } = req.body;

    // Ensure newFileName ends with .txt
    if (!newFileName.endsWith('.txt')) {
        newFileName += '.txt';
    }

    console.log(`Received request to replace text in file ${fileName} and save as ${newFileName}`);

    const filePath = path.join(__dirname, 'src', fileName);
    const newFilePath = path.join(__dirname, 'src', newFileName);

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading file ${filePath}:`, err);
            res.status(500).send('Error reading file');
            return;
        }

        const newData = data.split(originalText).join(replacementText);

        fs.writeFile(newFilePath, newData, 'utf8', err => {
            if (err) {
                console.error(`Error writing file ${newFilePath}:`, err);
                res.status(500).send('Error writing file');
                return;
            }

            console.log(`New file ${newFileName} created successfully`);
            res.send('New file created successfully');
        });
    });
});

app.listen(3000, () => console.log('Server started on port 3000'));