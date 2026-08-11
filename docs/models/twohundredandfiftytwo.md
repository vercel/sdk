# TwoHundredAndFiftyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFiftyTwo } from "@vercel/sdk/models/usereventpayload242next.js";

let value: TwoHundredAndFiftyTwo = {
  projectId: "<id>",
  projectName: "<value>",
  gitProvider: "github-custom-host",
  gitRepoId: "<id>",
  gitRepositoryName: "<value>",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `projectId`                                    | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `projectName`                                  | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `gitProvider`                                  | [models.GitProvider](../models/gitprovider.md) | :heavy_check_mark:                             | N/A                                            |
| `gitRepoId`                                    | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `gitRepositoryName`                            | *string*                                       | :heavy_check_mark:                             | N/A                                            |