# UserEventPayload243Next

## Example Usage

```typescript
import { UserEventPayload243Next } from "@vercel/sdk/models/aws.js";

let value: UserEventPayload243Next = {
  gitProvider: "github-limited",
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