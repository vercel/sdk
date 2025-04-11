# UploadFileRequest

## Example Usage

```typescript
import { UploadFileRequest } from "@vercel/sdk/models/uploadfileop.js";

// No examples available for this model
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `contentLength`                                          | *number*                                                 | :heavy_minus_sign:                                       | The file size in bytes                                   |                                                          |
| `xVercelDigest`                                          | *string*                                                 | :heavy_minus_sign:                                       | The file SHA1 used to check the integrity                |                                                          |
| `xNowDigest`                                             | *string*                                                 | :heavy_minus_sign:                                       | The file SHA1 used to check the integrity                |                                                          |
| `xNowSize`                                               | *number*                                                 | :heavy_minus_sign:                                       | The file size as an alternative to `Content-Length`      |                                                          |
| `teamId`                                                 | *string*                                                 | :heavy_minus_sign:                                       | The Team identifier to perform the request on behalf of. | team_1a2b3c4d5e6f7g8h9i0j1k2l                            |
| `slug`                                                   | *string*                                                 | :heavy_minus_sign:                                       | The Team slug to perform the request on behalf of.       | my-team-url-slug                                         |
| `requestBody`                                            | *ReadableStream<Uint8Array>*                             | :heavy_minus_sign:                                       | N/A                                                      |                                                          |