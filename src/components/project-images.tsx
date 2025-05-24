"use client"

import { useEffect, useState } from "react"

// Function to generate a blockchain explorer visualization
export function   BlockchainExplorerImage() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  if (!loaded) return <div className="w-full h-48 bg-gray-800 animate-pulse"></div>

  return (
    <div className="relative w-full h-48 bg-gradient-to-r from-purple-900/50 to-pink-900/50 overflow-hidden">
      <div className="absolute inset-0 flex flex-col">
        <div className="h-10 bg-gray-800 flex items-center px-4">
          <div className="w-24 h-5 bg-purple-500/50 rounded"></div>
          <div className="ml-auto flex space-x-2">
            <div className="w-5 h-5 rounded-full bg-pink-500/50"></div>
            <div className="w-5 h-5 rounded-full bg-purple-500/50"></div>
          </div>
        </div>
        <div className="flex-1 p-4 grid grid-cols-3 gap-2">
          {Array(6)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="bg-gray-800/80 rounded p-2">
                <div className="w-full h-3 bg-purple-500/30 rounded mb-2"></div>
                <div className="w-2/3 h-3 bg-pink-500/30 rounded"></div>
              </div>
            ))}
        </div>
        <div className="h-8 bg-gray-800/90 flex items-center justify-center">
          <div className="w-32 h-3 bg-purple-500/50 rounded"></div>
        </div>
      </div>
    </div>
  )
}

// Function to generate a blog platform visualization
export function BlogPlatformImage() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  if (!loaded) return <div className="w-full h-48 bg-gray-800 animate-pulse"></div>

  return (
    <div className="relative w-full h-48 bg-gradient-to-r from-purple-900/50 to-pink-900/50 overflow-hidden">
      <div className="absolute inset-0 flex flex-col">
        <div className="h-10 bg-gray-800 flex items-center px-4">
          <div className="w-24 h-5 bg-purple-500/50 rounded"></div>
          <div className="ml-auto flex space-x-2">
            <div className="w-16 h-5 rounded bg-pink-500/50"></div>
            <div className="w-16 h-5 rounded bg-purple-500/50"></div>
          </div>
        </div>
        <div className="flex-1 p-4">
          <div className="h-8 w-3/4 bg-white/10 rounded mb-3"></div>
          <div className="space-y-2">
            <div className="h-3 bg-gray-300/20 rounded w-full"></div>
            <div className="h-3 bg-gray-300/20 rounded w-full"></div>
            <div className="h-3 bg-gray-300/20 rounded w-5/6"></div>
            <div className="h-3 bg-gray-300/20 rounded w-4/6"></div>
          </div>
          <div className="mt-4 flex">
            <div className="w-20 h-6 bg-purple-500/50 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Function to generate a Solidity code generator visualization
export function SolidityGeneratorImage() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  if (!loaded) return <div className="w-full h-48 bg-gray-800 animate-pulse"></div>

  return (
    <div className="relative w-full h-48 bg-gradient-to-r from-purple-900/50 to-pink-900/50 overflow-hidden">
      <div className="absolute inset-0 flex">
        <div className="w-1/3 bg-gray-900 p-2">
          <div className="h-4 w-full bg-gray-800 mb-2"></div>
          <div className="space-y-1">
            <div className="h-3 bg-purple-500/30 rounded w-5/6"></div>
            <div className="h-3 bg-purple-500/30 rounded w-4/6"></div>
            <div className="h-3 bg-purple-500/30 rounded w-3/6"></div>
          </div>
        </div>
        <div className="w-2/3 bg-gray-800 p-2 font-mono text-xs text-gray-400">
          <div className="text-pink-400">contract</div>
          <div className="pl-4">
            <span className="text-purple-400">function</span> transfer() {"{"}
            <div className="pl-4">// Smart contract code</div>
            {"}"}
          </div>
        </div>
      </div>
    </div>
  )
}

// Function to generate a cross-chain bridge visualization
export function CrossChainBridgeImage() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  if (!loaded) return <div className="w-full h-48 bg-gray-800 animate-pulse"></div>

  return (
    <div className="relative w-full h-48 bg-gradient-to-r from-purple-900/50 to-pink-900/50 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-purple-500/50 flex items-center justify-center">
          <div className="w-10 h-10 rounded-full bg-gray-800"></div>
        </div>
        <div className="w-32 h-1 bg-pink-500/50"></div>
        <div className="w-16 h-16 rounded-full bg-pink-500/50 flex items-center justify-center">
          <div className="w-10 h-10 rounded-full bg-gray-800"></div>
        </div>
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center">
        <div className="bg-gray-800/80 rounded px-4 py-2 text-xs text-center">
          <div className="h-3 w-24 bg-white/20 rounded mx-auto"></div>
        </div>
      </div>
    </div>
  )
}

// Function to generate a ZK voting system visualization
export function ZkVotingImage() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  if (!loaded) return <div className="w-full h-48 bg-gray-800 animate-pulse"></div>

  return (
    <div className="relative w-full h-48 bg-gradient-to-r from-purple-900/50 to-pink-900/50 overflow-hidden">
      <div className="absolute inset-0 flex flex-col p-4">
        <div className="flex justify-between mb-4">
          <div className="w-24 h-6 bg-gray-800 rounded"></div>
          <div className="w-8 h-8 rounded-full bg-gray-800"></div>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-3">
          {Array(4)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="bg-gray-800/80 rounded p-2 flex items-center">
                <div className="w-5 h-5 rounded-full border-2 border-purple-500/50 mr-2"></div>
                <div className="w-full h-3 bg-gray-700 rounded"></div>
              </div>
            ))}
        </div>
        <div className="mt-4 mx-auto">
          <div className="w-32 h-8 bg-purple-500/50 rounded"></div>
        </div>
      </div>
    </div>
  )
}

// Function to generate an FHE marketplace visualization
export function FheMarketplaceImage() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  if (!loaded) return <div className="w-full h-48 bg-gray-800 animate-pulse"></div>

  return (
    <div className="relative w-full h-48 bg-gradient-to-r from-purple-900/50 to-pink-900/50 overflow-hidden">
      <div className="absolute inset-0 flex flex-col">
        <div className="h-10 bg-gray-800 flex items-center px-4">
          <div className="w-24 h-5 bg-purple-500/50 rounded"></div>
          <div className="ml-auto flex space-x-2">
            <div className="w-20 h-6 rounded bg-pink-500/50"></div>
          </div>
        </div>
        <div className="flex-1 p-4 grid grid-cols-2 gap-3">
          {Array(4)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="bg-gray-800/80 rounded p-2">
                <div className="w-full h-12 bg-gray-700 rounded mb-2 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-purple-500/30"></div>
                </div>
                <div className="w-full h-3 bg-gray-700 rounded mb-1"></div>
                <div className="w-2/3 h-3 bg-gray-700 rounded"></div>
              </div>
            ))}
        </div>
      </div>
      <div className="absolute top-2 right-2">
        <div className="w-6 h-6 rounded-full bg-pink-500/50 flex items-center justify-center text-xs">🔒</div>
      </div>
    </div>
  )
}

