# Previous

## Example Usage

```typescript
import { Previous } from "@vercel/sdk/models/userevent.js";

let value: Previous = {
  gitProvider: "github-custom-host",
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