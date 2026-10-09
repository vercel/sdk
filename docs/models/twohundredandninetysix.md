# TwoHundredAndNinetySix

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndNinetySix } from "@vercel/sdk/models/siftroute.js";

let value: TwoHundredAndNinetySix = {
  gitProvider: "github-custom-host",
  gitRepoId: "<id>",
  gitRepositoryName: "<value>",
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `gitProvider`                                  | [models.GitProvider](../models/gitprovider.md) | :heavy_check_mark:                             | N/A                                            |
| `gitRepoId`                                    | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `gitRepositoryName`                            | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `projectId`                                    | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `projectName`                                  | *string*                                       | :heavy_check_mark:                             | N/A                                            |