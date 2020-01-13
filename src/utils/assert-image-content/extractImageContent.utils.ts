// import { TesseractWorker } from 'tesseract.js';
//
// const assertImageContent = (img) => new Promise((resolve, reject) => {
//   const worker = new TesseractWorker();
//   const job = worker.recognize(img);
//
//   job.catch(() => {
//     return reject(Error('Something wrong happened processing the image'));
//   });
//
//   job.then(({ text }) => {
//     return resolve(text);
//   });
// });
//
// export default assertImageContent;
