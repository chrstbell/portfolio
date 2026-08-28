// compress-images.js
import sharp from 'sharp'
import { readdirSync, statSync, writeFileSync, renameSync, unlinkSync } from 'fs'
import { join, extname } from 'path'

const TARGET_DIRS = ['public/visual', 'public/certificates', 'public']
const MAX_WIDTH = 1600
const QUALITY = 75

function getAllImages(dir) {
  let results = []
  const list = readdirSync(dir)
  list.forEach((file) => {
    const filePath = join(dir, file)
    const stat = statSync(filePath)
    if (stat.isDirectory()) {
      results = results.concat(getAllImages(filePath))
    } else if (['.jpg', '.jpeg', '.png'].includes(extname(file).toLowerCase())) {
      results.push(filePath)
    }
  })
  return results
}

async function compressAll() {
  let allFiles = []
  for (const dir of TARGET_DIRS) {
    try {
      allFiles = allFiles.concat(getAllImages(dir))
    } catch (e) {
      console.log(`Skip ${dir}, folder tidak ditemukan`)
    }
  }

  allFiles = [...new Set(allFiles)]
  console.log(`Ditemukan ${allFiles.length} gambar. Mulai kompres...`)

  for (const file of allFiles) {
    try {
      const before = statSync(file).size
      const buffer = await sharp(file)
        .resize({ width: MAX_WIDTH, withoutEnlargement: true })
        .jpeg({ quality: QUALITY, mozjpeg: true })
        .toBuffer()

      const tempFile = file + '.tmp'
      writeFileSync(tempFile, buffer)
      renameSync(tempFile, file)

      const after = statSync(file).size
      console.log(`${file}: ${(before / 1024).toFixed(0)}KB → ${(after / 1024).toFixed(0)}KB`)
    } catch (err) {
      console.log(`GAGAL: ${file} — ${err.message}`)
    }
  }

  console.log('Selesai!')
}

compressAll()