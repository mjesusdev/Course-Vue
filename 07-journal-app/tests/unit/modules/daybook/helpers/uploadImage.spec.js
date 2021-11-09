import cloudinary from 'cloudinary'
import axios from 'axios'

import uploadImage from '@/modules/daybook/helpers/uploadImage'

cloudinary.config({
    cloud_name: 'dp4de4p3l',
    api_key: '973822616917977',
    api_secret: 'wvcp_V_WkhV6_yIsW-ZQekFPws8'
})

describe('Tests in uploadImage', () => {
    
    test('should upload a file and return URL', async( done ) => {
        
        const { data } = await axios.get('https://res.cloudinary.com/dp4de4p3l/image/upload/v1635761191/daybook/vhsaamcvucge8urllg5x.jpg', {
            responseType: 'arraybuffer'
        })

        const file = new File([data], 'test.jpg')
        const url = await uploadImage( file )
        expect( typeof url ).toBe('string')

        // ID
        const segments = url.split('/')
        const imageId = segments[ segments.length - 1 ].replace('.jpg', '')

        // Delete image from cloudinary after test
        cloudinary.v2.api.delete_resources( imageId, {}, () => {
            done()
        })

    })

})
