# VcrImageDetailVhs

Converted VHS drive data, present once an image has been optimized for sandbox launch.

## Example Usage

```typescript
import { VcrImageDetailVhs } from "@vercel/sdk/models/vcrimagedetail.js";

let value: VcrImageDetailVhs = {
  path: "/bin",
  digest: "<value>",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `path`                                                            | *string*                                                          | :heavy_check_mark:                                                | N/A                                                               |
| `digest`                                                          | *string*                                                          | :heavy_check_mark:                                                | N/A                                                               |
| `config`                                                          | [models.VcrImageDetailConfig](../models/vcrimagedetailconfig.md)  | :heavy_minus_sign:                                                | Optional VHS drive configuration captured for an optimized image. |