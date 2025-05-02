# GetProjectsBranchMatcher

Configuration for matching git branches to this environment

## Example Usage

```typescript
import { GetProjectsBranchMatcher } from "@vercel/sdk/models/getprojectsop.js";

let value: GetProjectsBranchMatcher = {
  type: "endsWith",
  pattern: "<value>",
};
```

## Fields

| Field                                                                                                                                                                                                  | Type                                                                                                                                                                                                   | Required                                                                                                                                                                                               | Description                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                                                                 | [models.GetProjectsProjectsResponse200ApplicationJSONResponseBodyProjectsCustomEnvironmentsType](../models/getprojectsprojectsresponse200applicationjsonresponsebodyprojectscustomenvironmentstype.md) | :heavy_check_mark:                                                                                                                                                                                     | The type of matching to perform                                                                                                                                                                        |
| `pattern`                                                                                                                                                                                              | *string*                                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                     | The pattern to match against branch names                                                                                                                                                              |