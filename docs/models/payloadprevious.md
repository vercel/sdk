# PayloadPrevious

## Example Usage

```typescript
import { PayloadPrevious } from "@vercel/sdk/models/userevent.js";

let value: PayloadPrevious = {
  gitProvider: "bitbucket",
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