# GetProjectsResponseBodyProjectsResponse200ApplicationJSONBranchMatcher

Configuration for matching git branches to this environment

## Example Usage

```typescript
import { GetProjectsResponseBodyProjectsResponse200ApplicationJSONBranchMatcher } from "@vercel/sdk/models/getprojectsresponsebodyprojectstargets.js";

let value:
  GetProjectsResponseBodyProjectsResponse200ApplicationJSONBranchMatcher = {
    type: "endsWith",
    pattern: "<value>",
  };
```

## Fields

| Field                                                                                                                                                                                                    | Type                                                                                                                                                                                                     | Required                                                                                                                                                                                                 | Description                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                                   | [models.GetProjectsResponseBodyProjectsResponse200ApplicationJson3ProjectsCustomEnvironmentsType](../models/getprojectsresponsebodyprojectsresponse200applicationjson3projectscustomenvironmentstype.md) | :heavy_check_mark:                                                                                                                                                                                       | The type of matching to perform                                                                                                                                                                          |
| `pattern`                                                                                                                                                                                                | *string*                                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                       | The pattern to match against branch names                                                                                                                                                                |