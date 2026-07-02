# Vhs

Converted VHS drive data, present once an image has been optimized for sandbox launch.

## Example Usage

```typescript
import { Vhs } from "@vercel/sdk/models/vcrimagelistitem.js";

let value: Vhs = {
  path: "/usr/X11R6",
  digest: "<value>",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `path`                                                            | *string*                                                          | :heavy_check_mark:                                                | N/A                                                               |
| `digest`                                                          | *string*                                                          | :heavy_check_mark:                                                | N/A                                                               |
| `config`                                                          | [models.Config](../models/config.md)                              | :heavy_minus_sign:                                                | Optional VHS drive configuration captured for an optimized image. |