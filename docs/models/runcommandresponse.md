# RunCommandResponse


## Supported Types

### `models.RunCommandResponseBody`

```typescript
const value: models.RunCommandResponseBody = {
  command: {
    id: "cmd_123a6c5209bc3778245d011443644c8d27dc2c50",
    name: "npm",
    args: [
      "run",
      "build",
    ],
    cwd: "/vercel/sandbox",
    sandboxId: "sbx_123a6c5209bc3778245d011443644c8d27dc2c50",
    exitCode: 0,
    startedAt: 1673123456789,
  },
};
```

### `JsonLStream<models.RunCommandSandboxesResponseBody>`

```typescript
const value: JsonLStream<models.RunCommandSandboxesResponseBody> = ;
```

