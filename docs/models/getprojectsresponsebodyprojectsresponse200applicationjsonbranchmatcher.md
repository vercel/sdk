# GetProjectsResponseBodyProjectsResponse200ApplicationJSONBranchMatcher

Configuration for matching git branches to this environment

## Example Usage

```typescript
import { GetProjectsResponseBodyProjectsResponse200ApplicationJSONBranchMatcher } from "@vercel/sdk/models/getprojectsresponsebodyprojectsframework.js";

let value:
  GetProjectsResponseBodyProjectsResponse200ApplicationJSONBranchMatcher = {
    pattern: "<value>",
    type: "endsWith",
  };
```

## Fields

| Field                                                                                                                                                                                                    | Type                                                                                                                                                                                                     | Required                                                                                                                                                                                                 | Description                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pattern`                                                                                                                                                                                                | *string*                                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                       | The pattern to match against branch names                                                                                                                                                                |
| `type`                                                                                                                                                                                                   | [models.GetProjectsResponseBodyProjectsResponse200ApplicationJson3ProjectsCustomEnvironmentsType](../models/getprojectsresponsebodyprojectsresponse200applicationjson3projectscustomenvironmentstype.md) | :heavy_check_mark:                                                                                                                                                                                       | The type of matching to perform                                                                                                                                                                          |