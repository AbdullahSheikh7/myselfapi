import express from "express"
import path from "path"

const app = express();
const PORT = 5000;

app.use(express.static("public"))

app.get('/cv', (req, res) => {
  const filePath = path.join(process.cwd(), 'assets/cv.pdf');
  res.sendFile(filePath, {
    headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'inline; filename="cv.pdf"'
    }
  })
});

app.get('/cv/download', (req, res) => {
  const filePath = path.join(process.cwd(), 'assets/cv.pdf');
  res.download(filePath, 'cv.pdf', (err) => {
    if (err) {
      console.error("Error downloading the file:", err);
      res.status(500).send('Error downloading file');
    }
  });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
