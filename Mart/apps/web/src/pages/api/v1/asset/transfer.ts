import { BadRequest } from 'http-errors'
import { NextApiResponse } from 'next'

import { ApiClient } from '@/clients/api-client'
import createHandler, { NextApiRequestApp } from '@/middleware'
import authMiddleware from '@/middleware/auth-middleware'
import userMiddleware from '@/middleware/user-middleware'
import validateBodyMiddleware, {
  ExtractBodyType,
} from '@/middleware/validate-body-middleware'
import { validateTransferAsset } from '@/utils/asset-validation'

const handler = createHandler()

handler.use(authMiddleware()).use(userMiddleware())

type BodyType = ExtractBodyType<typeof validateTransferAsset>

handler.post(
  validateBodyMiddleware(validateTransferAsset),
  async (request: NextApiRequestApp<BodyType>, response: NextApiResponse) => {
    const body = request.validResult.value as BodyType
    const packId = body.packId
    const passphrase = body.passphrase

    await ApiClient.instance.transferPack({
      packId,
      passphrase,
      externalId: request.user.externalId,
    })
    response.status(204).end()
  }
)

handler.get(async (request: NextApiRequestApp, response: NextApiResponse) => {
  const packId = request.query.packId
  if (!packId || typeof packId !== 'string')
    throw new BadRequest('Missing packId')
  response.json(await ApiClient.instance.transferPackStatus(packId))
})

export default handler
