# UserEventPayload264Next

## Example Usage

```typescript
import { UserEventPayload264Next } from "@vercel/sdk/models/siftroute.js";

let value: UserEventPayload264Next = {
  gitProvider: "gitlab",
  gitRepoId: "<id>",
  gitRepositoryName: "<value>",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `gitProvider`                                                | [models.PayloadGitProvider](../models/payloadgitprovider.md) | :heavy_check_mark:                                           | N/A                                                          |
| `gitRepoId`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `gitRepositoryName`                                          | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |