# UserEventPayload220Next

## Example Usage

```typescript
import { UserEventPayload220Next } from "@vercel/sdk/models/onehundredandeightyfive.js";

let value: UserEventPayload220Next = {
  gitProvider: "bitbucket",
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