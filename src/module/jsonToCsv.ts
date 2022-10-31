import path from 'node:path'
import fs from 'node:fs'
import { SAMPLE_CSV_FILE_NAME } from '../constants'
import { items } from '../data/sampleData'
import { IItem } from '../types'


export function convertJsonToCsv(items: IItem[]): boolean {
  const defaultOutFile = path.join(path.dirname(__dirname), `data`, SAMPLE_CSV_FILE_NAME)
  // console.log(defaultOutFile)
  const csvKeys = Object.keys(items[0])
  console.dir(csvKeys)
  fs.writeFileSync(defaultOutFile, `${csvKeys.join(',') + '\n'}`);

  for (const item of items) {
    const values = Object.values(item)
    const canocalizeValues = values.map(val => {
      if (val instanceof String) {
        return val
      } else if (val === null) {
        return ""
      } else {
        return JSON.stringify(val)
      }
    })
    // console.log(canocalizeValues)
    fs.appendFileSync(defaultOutFile, `${canocalizeValues.join(',') + '\n'}`);
  }

  console.log(`INFO:: csv file written - ${defaultOutFile}`)
  return true
}

convertJsonToCsv(items)