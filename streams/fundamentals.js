import { Readable, Writable, Transform} from 'node:stream'

class OneToHundredStream extends Readable {
    index = 1

    _read(){
        const i = this.index++    

        setTimeout(() => {
        
        
            if(i > 100){
                this.push(null)
            } else { 
                const buf = Buffer.from(String(i))
                // this.push(`${i}`)
                this.push(buf)
            }
        }, 100)
    }
}

class InvertValue extends Transform {
    _transform(chunk,enconding,callback){
        const transformed = Number(chunk.toString()) * -1

        callback(null, Buffer.from(String(transformed)))
    }
}
class MultiplyByTenStream extends Writable {
    _write(chunk, enconding, callback){
        console.log(Number(chunk.toString()) * 10)
        callback()
    }
}

new OneToHundredStream()
    .pipe(new InvertValue())
    .pipe(new MultiplyByTenStream())