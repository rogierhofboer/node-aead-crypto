/// <reference types="node" />
export interface EncryptionResult {
    ciphertext: Buffer;
    auth_tag: Buffer;
}
export interface DecryptionResult {
    plaintext: Buffer;
    auth_ok: boolean;
}
export namespace ccm {
    export function encrypt(key: Buffer, iv: Buffer, plaintext: Buffer, aad: Buffer, authTagLength: number): EncryptionResult;
    export function decrypt(key: Buffer, iv: Buffer, ciphertext: Buffer, aad: Buffer, authTag: Buffer): DecryptionResult;
}
export namespace gcm {
    export function encrypt(key: Buffer, iv: Buffer, plaintext: Buffer, aad: Buffer): EncryptionResult;
    export function decrypt(key: Buffer, iv: Buffer, ciphertext: Buffer, aad: Buffer, authTag: Buffer): DecryptionResult;
}