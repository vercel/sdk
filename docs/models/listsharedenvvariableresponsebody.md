# ListSharedEnvVariableResponseBody

## Example Usage

```typescript
import { ListSharedEnvVariableResponseBody } from "@vercel/sdk/models/listsharedenvvariableop.js";

let value: ListSharedEnvVariableResponseBody = {
  data: [],
  pagination: {
    count: 20,
    next: 1540095775951,
    prev: 1540095775951,
  },
};
```

## Fields

| Field                                                                                                                                                           | Type                                                                                                                                                            | Required                                                                                                                                                        | Description                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                                                          | [models.Data](../models/data.md)[]                                                                                                                              | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |
| `pagination`                                                                                                                                                    | [models.Pagination](../models/pagination.md)                                                                                                                    | :heavy_check_mark:                                                                                                                                              | This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data. |