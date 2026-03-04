# UserEventPayload160Previous

## Example Usage

```typescript
import { UserEventPayload160Previous } from "@vercel/sdk/models/userevent.js";

let value: UserEventPayload160Previous = {
  gitProvider: "github",
  gitRepoId: "<id>",
  gitRepositoryName: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `gitProvider`                                                                  | [models.UserEventPayloadGitProvider](../models/usereventpayloadgitprovider.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `gitRepoId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `gitRepositoryName`                                                            | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |