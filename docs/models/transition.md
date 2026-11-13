# Transition

Replacement billing-cycle policy. Defaults to restart_cycle.

## Example Usage

```typescript
import { Transition } from "@vercel/sdk/models/buycreditsop.js";

let value: Transition = {
  type: "restart_cycle",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `type`                                         | [models.OptionsType](../models/optionstype.md) | :heavy_check_mark:                             | N/A                                            |