# GenerateRoutePathCondition

## Example Usage

```typescript
import { GenerateRoutePathCondition } from "@vercel/sdk/models/generaterouteop.js";

let value: GenerateRoutePathCondition = {
  syntax: "path-to-regexp",
  value: "<value>",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `syntax`                             | [models.Syntax](../models/syntax.md) | :heavy_check_mark:                   | N/A                                  |
| `value`                              | *string*                             | :heavy_check_mark:                   | N/A                                  |