# ResponseBodyElasticBuildMachine

Internal assignment, intentionally excluded from API input/output schemas.

## Example Usage

```typescript
import { ResponseBodyElasticBuildMachine } from "@vercel/sdk/models/getprojectsresponsebodyprojectsresponse200applicationjson3checksconclusion.js";

let value: ResponseBodyElasticBuildMachine = {
  cores: 1437.93,
  label: "enhanced",
  memory: 3586.4,
};
```

## Fields

| Field                                                                                                                                                                                   | Type                                                                                                                                                                                    | Required                                                                                                                                                                                | Description                                                                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `cores`                                                                                                                                                                                 | *number*                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                      | N/A                                                                                                                                                                                     |
| `label`                                                                                                                                                                                 | [models.ResponseBodyLabel](../models/responsebodylabel.md)                                                                                                                              | :heavy_check_mark:                                                                                                                                                                      | Machine types an elastic decision can effectively apply or persist. The algorithm may consider Basic, but Basic is normalized to standard before an elastic decision becomes effective. |
| `memory`                                                                                                                                                                                | *number*                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                      | N/A                                                                                                                                                                                     |