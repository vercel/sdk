# UserEventPayload270Next

## Example Usage

```typescript
import { UserEventPayload270Next } from "@vercel/sdk/models/payloaddefault.js";

let value: UserEventPayload270Next = {
  gitProvider: "cursor-origin",
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